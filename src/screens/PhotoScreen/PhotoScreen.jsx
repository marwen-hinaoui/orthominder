import { useFocusEffect } from '@react-navigation/native'
import axios from 'axios'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { useCallback, useRef, useState } from 'react'
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function PhotoScreen() {
  const cameraPermission = useCameraPermissions()
  const [facing, setFacing] = useState('back')
  const [isDetectedFace, setIsDetectedFace] = useState(false)
  const [successCount, setSuccessCount] = useState(0)
  const [confirmedPhotos, setConfirmedPhotos] = useState([])
  const [confirmed, setConfirmed] = useState(false)
  const cameraRef = useRef(null)

  useFocusEffect(
    useCallback(() => {
      if (!confirmed) {
        const interval = setInterval(captureAndSend, 3000)
        return () => clearInterval(interval)
      }
    }, [confirmed])
  )

  const captureAndSend = async () => {
    if (cameraRef.current && !confirmed) {
      const photo = await cameraRef.current.takePictureAsync({ base64: false })

      const formData = new FormData()
      formData.append('image', {
        uri: photo.uri,
        name: 'face.jpg',
        type: 'image/jpg',
      })

      try {
        const res = await axios.post('http://192.168.43.254:8000/api/detect/', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })

        const isFace = res.data.face_detected
        setIsDetectedFace(isFace)

        if (isFace) {
          setSuccessCount((prev) => {
            const newCount = prev + 1
            if (newCount >= 3) {
              setConfirmed(true)
              setConfirmedPhotos((prevPhotos) => [...prevPhotos, photo.uri])
            }
            return newCount
          })
        } else {
          setSuccessCount(0)
        }

      } catch (error) {
        console.error('Detection error:', error)
        setSuccessCount(0)
      }
    }
  }

  const handleRetake = () => {
    setConfirmed(false)
    setSuccessCount(0)
    setIsDetectedFace(false)
  }

  if (!cameraPermission) return <View />
  const [permission, requestPermission] = cameraPermission

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    )
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'))
  }

  return (
    <View style={styles.container}>
      {!confirmed && (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          <View style={styles.overlay}>
            <Text style={styles.statusText}>Detected: {isDetectedFace ? '✅' : '❌'}</Text>
            <Text style={styles.statusText}>Progress: {successCount} / 3</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.flip}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}

      {confirmed && (
        <View style={styles.confirmContainer}>
          <Text style={styles.confirmText}>✅ Face Confirmed!</Text>
          <Button title="Retake New Photo" onPress={handleRetake} />
        </View>
      )}

      {confirmedPhotos.length > 0 && (
        <View style={styles.galleryContainer}>
          <Text style={styles.galleryTitle}>🖼️ Confirmed Photos</Text>
          <FlatList
            horizontal
            data={confirmedPhotos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.galleryImage} />
            )}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
  },
  statusText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
  },
  flip: {
    fontSize: 16,
    color: 'white',
  },
  confirmContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  confirmText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  galleryContainer: {
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
  galleryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  galleryImage: {
    width: 120,
    height: 120,
    marginHorizontal: 5,
    borderRadius: 10,
  },
})
