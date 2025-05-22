import { View, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { ICONSIZE } from '../constants/FontSizes';
import { COLORS } from '../constants/colors';

export default function Loading() {
  return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={COLORS.PRIMARY} size={ICONSIZE.LARGE} />
      </View>
  )
}
const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});