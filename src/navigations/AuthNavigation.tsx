import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/Auth/LoginScreen';
import RegisterScren from '@screens/Auth/RegisterScreen';

const Stack = createNativeStackNavigator();

function AuthNaviagtion() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScren}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNaviagtion;
