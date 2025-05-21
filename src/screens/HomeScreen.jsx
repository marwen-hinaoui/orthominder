import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux';
import { clear_storage } from '../redux/slices';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch()

  const logout = async () =>{
      dispatch(clear_storage())
  }
  return (
    <SafeAreaView>
      <View >
        <Button
          title='logout'
          onPress={logout}
        />
        <Text style={{ color: '#000' }}>HomeScreen</Text>
      </View>
    </SafeAreaView>

  )
}