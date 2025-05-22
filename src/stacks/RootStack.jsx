import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStacks from './AuthStacks'
import MainStacks from './MainStacks'
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { set_storage } from '../redux/slices';
import { COLORS } from '../constants/colors';
import { ICONSIZE } from '../constants/FontSizes';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Loading from '../components/Loading';

const Stack = createNativeStackNavigator()

export default function RootStack() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.app.user)
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = await SecureStore.getItemAsync('user')
        if (storedUser) {
          dispatch(set_storage(JSON.parse(storedUser)))
        }
      } catch (e) {
        dispatch(clear_storage())
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  if (loading) {
      return (
        <Loading />
      )
    }

    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user?.refresh
          ? <Stack.Screen name='AuthStack' component={AuthStacks} />
          : <Stack.Screen name='MainStack' component={MainStacks} />
        }
      </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE, 
    }
});