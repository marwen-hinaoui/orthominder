import { CameraView } from 'expo-camera';
import { useCallback, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { PhotoStyles } from '../screens/PhotoScreen/PhotoStyles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { captureAndSend } from '../api/face_detection';
import GreenFace from '../../assets/face_green_.png'
import RedFace from '../../assets/face_red.png'
import { Ionicons } from '@expo/vector-icons';
import { ICONSIZE } from '../constants/FontSizes'
import { COLORS } from '../constants/colors';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated'
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function CameraViewComponent() {
  const [facing, setFacing] = useState('back')
  const [isDetectedFace, setIsDetectedFace] = useState(false)
  const [successCount, setSuccessCount] = useState(0)
  const [confirmedPhotos, setConfirmedPhotos] = useState([])
  const [confirmed, setConfirmed] = useState(false)
  const cameraRef = useRef(null)
  const navigation = useNavigation();
  const progress = useSharedValue(0);

  useFocusEffect(
      useCallback(() => {
        if (!confirmed) {
          const interval = setInterval(() => captureAndSend(cameraRef, setSuccessCount, setConfirmed, setConfirmedPhotos, setIsDetectedFace, confirmed), 2000)
          return () => clearInterval(interval)
        } 
        if(confirmed)
            progress.value = withTiming(1, { duration: 500 });

      }, [confirmed])
    )

  const animatedProps = useAnimatedProps(() => {
    const length = 100;
    const strokeDashoffset = length * (1 - progress.value);
    return {
      strokeDashoffset,
    };
  });
  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'))
  }

  return (
<CameraView ref={cameraRef} style={PhotoStyles.camera} facing={facing}>
  
  {/* Overlay Face Guide Rectangle */}
  <View style={PhotoStyles.faceGuideContainer}>
    {(isDetectedFace && successCount >= 3) 
    ? (
      <Svg width={100} height={100} viewBox="0 0 52 52">
        <AnimatedPath
          d="M14 27 L22 35 L38 19"
          stroke="#008000"
          strokeWidth="4"
          fill="none"
          strokeDasharray="100"
          animatedProps={animatedProps}
        />
      </Svg>
    )
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
        <Ionicons name='camera-reverse' color={COLORS.WHITE} size={ICONSIZE.XLARGE}/>
    </TouchableOpacity>

    <TouchableOpacity style={PhotoStyles.cameraButton} onPress={() => navigation.goBack()}>
      <Ionicons name='close' size={ICONSIZE.XLARGE} color={COLORS.WHITE} />
    </TouchableOpacity>
  </View>
</CameraView>

  );
}

