import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { COLORS } from '../constants/colors';
import PhotoScreen from '../screens/PhotoScreen/PhotoScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { clear_storage } from '../redux/slices'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AppointementScreen from '../screens/Appointement/AppointementScreen';

const Tab = createBottomTabNavigator()

export default function TabStack() {
  const dispatch = useDispatch()
  const logout = async () => {
    dispatch(clear_storage())
  }
  return (
    <Tab.Navigator
        screenOptions={{
        tabBarButton: (props) => <TouchableOpacity {...props}  activeOpacity={0.1}  />,
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

      <Tab.Screen name='Home' component={ HomeScreen } 
        options={{
          headerShown: true,
          header: () => <Header title="Home" />,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      
      <Tab.Screen name='PhotoScreen' component={ PhotoScreen } 
        options={{
          headerShown: true,
          header: () => <Header title="Photos" />,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name='Appointement' component={ AppointementScreen } 
        options={{
          headerShown: true,
          header: () => <Header title="Appointement" />,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user-doctor" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name='Profile' component={ ProfileScreen } 
        options={{
          headerShown: true,
          header: () => <Header logout={true} callback={logout} title="Profile" />,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-sharp" size={size} color={color} />
          )
        }}
      />

    </Tab.Navigator>
)
}


const styles = StyleSheet.create({
  tapBar:{
    position: 'absolute',
    alignSelf: 'center',
    bottom: 23,
    elevation: 100,
    marginHorizontal: 16,
    backgroundColor: COLORS.WHITE,
    borderRadius: 33,
    height: 60,
    paddingTop: 11,
  }
})