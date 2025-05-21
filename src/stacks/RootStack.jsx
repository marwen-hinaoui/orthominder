import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStacks from './AuthStacks'
import MainStacks from './MainStacks'
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { set_storage } from '../redux/slices';

const Stack = createNativeStackNavigator()

export default function RootStack() {
  // const dispatch = useDispatch()
  const user = useSelector(state => state.app.user)
  // useEffect(() => {
  //   let token = SecureStore.getItem('token')
  //   console.log('token', token)
  //   dispatch(set_token(token))
  // }, [token])

  


    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          { !user

              ?<Stack.Screen name='AuthStack' component={AuthStacks} />
              :<Stack.Screen name='MainStack' component={MainStacks}/>
          }
      </Stack.Navigator>
    )
}