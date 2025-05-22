import axios from 'axios';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PhotoScreen() {
  const cameraPermission = useCameraPermissions();
  const [facing, setFacing] = useState('back');
  const [faces, setFaces] = useState([]);
  const cameraRef = useRef(null);



  useEffect(() => {
    let interval;
    if (cameraRef.current) {
      interval = setInterval(captureAndSend, 200);
    }
    return () => clearInterval(interval);
  }, [cameraRef]);

  const captureAndSend = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ base64: false });

      const formData = new FormData();
      formData.append('image', {
        uri: photo.uri,
        name: 'face.jpg',
        type: 'image/jpg',
      });

      try {
        const response = await axios.post('http://192.168.43.254:8000/api/detect/', 
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        )

        const result = await response.json();
        setFaces(result.faces);
        console.log('Detected faces:', result.faces);
      } catch (error) {
        console.error('Detection error:', error);
      }
    }
  };

  if (!cameraPermission) {
    return <View />;
  }

  

  const [permission, requestPermission] = cameraPermission;

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
            <View style={styles.overlay}>
              <Text style={styles.text}>Detected Faces: {faces.length}</Text>
            </View>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    width:444,
    height:444,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
