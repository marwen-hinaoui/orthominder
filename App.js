import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootStack from './src/stacks/RootStack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
    </Provider>
  );
}
