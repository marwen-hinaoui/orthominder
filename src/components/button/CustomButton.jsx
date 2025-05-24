import { Pressable } from 'react-native'
import ButtonContent from './ButtonContent'


export default function CustomButton({ name, callback, icon, width, loading, backgroundColor }) {
    return (
        <Pressable
            onPress={callback}
            android_ripple={null}
            style={{
                width: width,
                backgroundColor:backgroundColor,
                borderRadius: 12,
                alignItems: 'center',

            }}
        >
            <ButtonContent name={name} icon={icon} loading={loading}  />
        </Pressable>

    )
}


