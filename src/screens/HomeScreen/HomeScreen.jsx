import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function HomeScreen({navigation}) {

  return (
    <SafeAreaView>
      <View >

        <Text style={{ color: '#000' }}>HomeScreen</Text>
      </View>
    </SafeAreaView>

  )
}