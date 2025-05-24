

import CameraViewComponent from '../components/CameraViewComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabStack from './TabStack';

const Stack = createNativeStackNavigator()

export default function MainAppStacks() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabStack" component={TabStack} />
        <Stack.Screen name="Camera" component={CameraViewComponent} />
    </Stack.Navigator>
)
}


