import { View } from 'react-native'
import { COLORS } from '../constants/colors'
export default function Card({children, marginBottom}) {
  return (
    <View style={{
        borderRadius: 6,
        backgroundColor: COLORS.WHITE,
        elevation: 777,
        padding:10,
        marginBottom: marginBottom,

    }}>
      {children}
    </View>
  )
}


