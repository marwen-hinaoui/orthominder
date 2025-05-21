import { Pressable } from 'react-native'
import { COLORS } from '../../constants/colors'
import ButtonContent from './ButtonContent'


export default function CustomButton({ name, callback, icon, width, loading }) {
    return (
        <Pressable
            onPress={callback}
            android_ripple={null}
            style={{
                width: width,
                backgroundColor: COLORS.PRIMARY,
                borderRadius: 12,
                alignItems: 'center',

            }}
        >
            <ButtonContent name={name} icon={icon} loading={loading}  />
        </Pressable>

    )
}


