// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen';
import { COLORS } from '../constants/colors';
import PhotoScreen from '../screens/PhotoScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createBottomTabNavigator()
export default function MainStacks() {
  return (
    <Stack.Navigator
        screenOptions={{
        tabBarButton: (props) => <TouchableOpacity {...props} activeOpacity={0.1}  />,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarInactiveTintColor: COLORS.BLACK, 
          tabBarStyle: styles.tapBar,
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >

      <Stack.Screen name='Home' component={ HomeScreen } 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      
      <Stack.Screen name='PhotoScreen' component={ PhotoScreen } 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" size={size} color={color} />
          )
        }}
      />
      <Stack.Screen name='Profile' component={ ProfileScreen } 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-sharp" size={size} color={color} />
          )
        }}
      />
    </Stack.Navigator>
  )
}


const styles = StyleSheet.create({
  tapBar:{

    position: 'absolute',
    bottom: 23,
    elevation: 100,
    marginHorizontal: 16,
    width: 400,
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 33,
    height: 60,
    paddingTop: 11,
  }
})