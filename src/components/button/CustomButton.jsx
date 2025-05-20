import { Pressable } from 'react-native'
import { COLORS } from '../../constants/colors'
import ButtonContent from './ButtonContent'


export default function CustomButton({ name, callback, icon, width }) {
    return (
        <Pressable
            onPress={callback}
            android_ripple={null}
            style={{
                width: width,
                padding: 5,
                backgroundColor: COLORS.PRIMARY,
                borderRadius: 12,
                alignItems: 'center',

            }}
        >
            <ButtonContent name={name} icon={icon} loading={false}  />
        </Pressable>

    )
}


