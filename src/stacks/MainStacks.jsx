// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen';
import { COLORS } from '../constants/colors';
import PhotoScreen from '../screens/PhotoScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createBottomTabNavigator()
export default function MainStacks() {
  return (

    <Stack.Navigator
      
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarInactiveTintColor: COLORS.BLACK, 

          tabBarStyle: {
            position: 'absolute',
            bottom: 16,
            elevation: 0,
            marginHorizontal: 16,
            width: 400,
            alignSelf: 'center',
            backgroundColor: COLORS.WHITE,
            borderRadius: 33,
            height: 60,
            paddingTop: 11,
          },
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