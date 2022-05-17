import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '~/screens/LoginScreen';
import RegisterScren from '~/screens/RegisterScren';

const Stack = createNativeStackNavigator();

function Auth() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Regist"
        component={RegisterScren}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Auth;
