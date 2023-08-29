import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage} from './screens/login/LoginPage';
import {HomePage} from './screens/home/HomePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
