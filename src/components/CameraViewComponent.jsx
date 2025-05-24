import { CameraView } from 'expo-camera';
import { useCallback, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { PhotoStyles } from '../screens/PhotoScreen/PhotoStyles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { captureAndSend } from '../api/face_detection';
import GreenFace from '../../assets/face_green.png'
import RedFace from '../../assets/face_red.png'
import { Ionicons } from '@expo/vector-icons';
import { ICONSIZE } from '../constants/FontSizes'

export default function CameraViewComponent() {
  const [facing, setFacing] = useState('back')
  const [isDetectedFace, setIsDetectedFace] = useState(false)
  const [successCount, setSuccessCount] = useState(0)
  const [confirmedPhotos, setConfirmedPhotos] = useState([])
  const [confirmed, setConfirmed] = useState(false)
  const cameraRef = useRef(null)
  const navigation = useNavigation();


  useFocusEffect(
      useCallback(() => {
        if (!confirmed) {
          const interval = setInterval(() => captureAndSend(cameraRef, setSuccessCount, setConfirmed, setConfirmedPhotos, setIsDetectedFace, confirmed), 3000)
          return () => clearInterval(interval)
        }
      }, [confirmed])
    )
  

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'))
  }

  return (
<CameraView ref={cameraRef} style={PhotoStyles.camera} facing={facing}>
  
  {/* Overlay Face Guide Rectangle */}
  <View style={PhotoStyles.faceGuideContainer}>
    {(isDetectedFace && successCount >= 3) 
    ? <Image style={PhotoStyles.faceGuide} source={GreenFace} />
    : <Image style={PhotoStyles.faceGuide} source={RedFace} />
  }
  </View>

  {/* Status Overlay */}
  {/* <View style={PhotoStyles.overlay}>
    <Text style={PhotoStyles.statusText}>Detected: {isDetectedFace ? '✅' : '❌'}</Text>
    <Text style={PhotoStyles.statusText}>Progress: {successCount} / 3</Text>
  </View> */}

  {/* Buttons */}
  <View style={PhotoStyles.buttonContainer}>
    <TouchableOpacity style={PhotoStyles.cameraButton}  onPress={toggleCameraFacing}>

        <Ionicons name='camera-reverse' size={ICONSIZE.XLARGE}/>

    </TouchableOpacity>
    <TouchableOpacity style={PhotoStyles.cameraButton} onPress={() => navigation.goBack()}>
      <Ionicons name='close' size={ICONSIZE.LARGE}/>
    </TouchableOpacity>
  </View>
</CameraView>

  );
}

