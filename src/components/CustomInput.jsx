import { Ionicons } from '@expo/vector-icons'
import { View, TextInput, StyleSheet, Text, Animated } from 'react-native'
import { FONTSIZE, ICONSIZE } from '../constants/FontSizes'
import { COLORS } from '../constants/colors'

import { useEffect, useRef } from 'react'
// import CustomText from './CustomText' // Removed as it's not used in the provided snippet

const CustomTextInput = ({
  iconName,
  placeholder,
  value,
  setState,
  isPassword,
  isPasswordHidden,
  setIsPasswordHiden,
  error,
  errors_touched,


}) => {
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (error) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start()
    }
  }, [error])

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 0],
  })

  return (

    <View style={error && errors_touched ? {marginBottom: 0} : {marginBottom: 12}}>
      <View style={styles.container}>
        <Ionicons name={iconName} size={ICONSIZE.SMALL} color={error && errors_touched ? COLORS.DANGER : COLORS.BLACK} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.BLACK}
          value={value}
          secureTextEntry={isPasswordHidden}
          onChangeText={setState}
        />
        {isPassword && (
          !isPasswordHidden ? (
            <Ionicons
              name="eye-off"
              size={ICONSIZE.SMALL}
              onPress={() => setIsPasswordHiden(true)}
            />
          ) : (
            <Ionicons
              name="eye"
              size={ICONSIZE.SMALL}
              onPress={() => setIsPasswordHiden(false)}
            />
          )
        )}
      </View>

      {error && errors_touched && (
        <Animated.View
          style={{
            opacity: animation,
            transform: [{ translateY }],
            minHeight: FONTSIZE.SMALL,
          }}>
          <Text style={styles.error}>{error}</Text>
        </Animated.View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 1,
    elevation: 999,
  },
  icon: {
    marginRight: 8,
  },
  input: {

    flex: 1,
    color: '#000',
    fontSize: FONTSIZE.SMALL,
  },
  error:{
    fontSize:FONTSIZE.SMALL,
    color: COLORS.DANGER,
    paddingLeft: 3,
    marginBottom: 7
  }
})

export default CustomTextInput