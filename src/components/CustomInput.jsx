import { Ionicons } from '@expo/vector-icons';
import { View, TextInput, StyleSheet } from 'react-native';
import { FONTSIZE, ICONSIZE } from '../constants/FontSizes';
import { COLORS } from '../constants/colors';


const CustomTextInput = ({ iconName, placeholder, value, setState, password }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={ICONSIZE.PRIMARY} color={COLORS.BLACK} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.BLACK}
        value={value}
        secureTextEntry={password}
        onChangeText={setState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 333,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 1,
    elevation: 999,
    marginBottom: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: FONTSIZE.PRIMARY,

  },
});

export default CustomTextInput;
