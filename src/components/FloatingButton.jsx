import { StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants/colors'
import { ICONSIZE } from '../constants/FontSizes'
import { Ionicons } from '@expo/vector-icons'

export default function FloatingButton({callback}) {
  return (
    <TouchableOpacity onPress={callback}  style={styles.floating} >
        <Ionicons color={COLORS.WHITE} name='camera' size={ICONSIZE.PRIMARY} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    floating: {
        width: 55,
        height: 55,
        borderRadius: 30,
        backgroundColor: COLORS.PRIMARY,
        position: 'absolute',
        bottom: 106,
        right: 23,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})