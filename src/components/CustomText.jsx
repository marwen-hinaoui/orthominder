import { Text } from 'react-native'
import { useFonts } from 'expo-font'

export default function CustomText({children, color, fontSize, fontWeight}) {
    const [loaded] = useFonts({
        OpenSans: require('../../assets/fonts/OpenSans-Regular.ttf')
    })
    if(!loaded){
        return null
    }
    return (
      <Text style={{fontFamily:'OpenSans', fontWeight: fontWeight, fontSize:fontSize, color:color }}>{children}</Text>
    )
}