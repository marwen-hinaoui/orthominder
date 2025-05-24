import { CameraView, useCameraPermissions } from 'expo-camera'
import { useState } from 'react'
import { View } from 'react-native'
import { PhotoStyles } from './PhotoStyles'
import  FloatingButton  from '../../components/FloatingButton'





export default function PhotoScreen({navigation}) {
  const cameraPermission = useCameraPermissions()
  const [confirmed, setConfirmed] = useState(false)
  const [permission, requestPermission] = cameraPermission

  

  const navigateToCamera = ()=>{
    navigation.navigate('Camera')
  }



  return (
    <View style={PhotoStyles.container}>
      {!confirmed && (
        <FloatingButton callback={!permission?.granted ? requestPermission : navigateToCamera} />

      )}

    </View>
  )
}

