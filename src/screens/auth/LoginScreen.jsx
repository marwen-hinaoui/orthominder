import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux';
import { set_token } from '../../redux/slices';
import CustomButton from '../../components/button/CustomButton';
import CustomTextInput from '../../components/CustomInput';
import { useState } from 'react';
import { Image } from 'react-native';
import AutrhIamge from '../../../assets/auth.png'
import { AuthStyles } from './AuthStyles';
import { Link } from '@react-navigation/native';

export default function LoginScreen({navigation}) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () =>{
    dispatch(set_token('dsdsdsdsdsdsdsd'))
  }
  

  return (
    <SafeAreaView>
      <View style={AuthStyles.container}>
        <View>
          <Image source={AutrhIamge}  style={AuthStyles.image}/>
        </View>
        <View>
          <CustomTextInput iconName={'mail'} placeholder={'Email'} value={email} setState={setEmail}/>
          <CustomTextInput iconName={'lock-open'} placeholder={'Password'} value={password} setState={setPassword} password={true}/>
          <CustomButton name={'Login'} callback={login} icon={'enter'} width={333}/>
          {/* <Link screen={}> */}
            <Text style={AuthStyles.text} >Forget password!</Text>
          {/* </Link> */}
          
        </View>
      </View>
    </SafeAreaView>
  )
}

