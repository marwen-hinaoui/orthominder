import { View, StyleSheet, Dimensions } from 'react-native'
const { height } = Dimensions.get('window')

export default function ContentWrapper({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 16,


  }
})