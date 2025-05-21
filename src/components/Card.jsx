import { View } from 'react-native'
import { COLORS } from '../constants/colors'
export default function Card({children, marginTop}) {
  return (
    <View style={{
        borderRadius: 12,
        backgroundColor: COLORS.WHITE,
        elevation: 555,
        padding:10,
        marginTop: marginTop,
    }}>
      {children}
    </View>
  )
}


