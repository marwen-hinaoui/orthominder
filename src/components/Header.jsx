import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ICONSIZE } from '../constants/FontSizes'
import { COLORS } from '../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Header({ title, logout, callback }) {
  return (
  <SafeAreaView edges={['top']} style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.icons}>
        <TouchableOpacity>
          <Ionicons name='notifications' color={COLORS.BLACK} size={ICONSIZE.PRIMARY} />
        </TouchableOpacity>
        {logout && 
          <TouchableOpacity>
            <Ionicons onPress={callback} style={{ marginLeft:12 }} name='log-out' color={COLORS.DANGER} size={ICONSIZE.PRIMARY} />
          </TouchableOpacity>
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: COLORS.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons:{
    flexDirection:'row'

  }
})
