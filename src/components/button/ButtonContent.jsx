import { View, Text } from 'react-native'
import { BarIndicator } from 'react-native-indicators'
import { COLORS } from '../../constants/colors'
import { ICONSIZE } from '../../constants/FontSizes'
import { Ionicons } from '@expo/vector-icons'
import { ButtonStyles } from './ButtonStyles'

export default function ButtonContent({loading, name, icon}) {
  return (
    <View style={ButtonStyles.container}>
          <Text style={ButtonStyles.text}>{name}</Text>
            {!loading 
                ?<Text>{icon && <Ionicons name={icon} size={ICONSIZE.PRIMARY} style={ButtonStyles.icon} />}</Text>
                :<Text><BarIndicator size={ICONSIZE.PRIMARY} color={COLORS.WHITE} /></Text>
            }
    </View>
  )
}

