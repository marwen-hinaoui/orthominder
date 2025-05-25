import { View, Text } from 'react-native'
import { COLORS } from '../../constants/colors'
import { ICONSIZE } from '../../constants/FontSizes'
import { Ionicons } from '@expo/vector-icons'
import { ButtonStyles } from './ButtonStyles'
import { ActivityIndicator } from 'react-native-paper'

export default function ButtonContent({loading, name, icon}) {
  return (
    <View style={ButtonStyles.container}>
          <Text style={ButtonStyles.text}>{name}</Text>
          {/* <Text>{icon && <Ionicons name={icon} size={ICONSIZE.PRIMARY} style={ButtonStyles.icon} />}</Text> */}
            {!loading 
                ?<Text>{icon && <Ionicons name={icon} size={ICONSIZE.SMALL} style={ButtonStyles.icon} />}</Text>
                :<Text><ActivityIndicator color={COLORS.WHITE} size={ICONSIZE.PRIMARY} /></Text>
            }
    </View>
  )
}

