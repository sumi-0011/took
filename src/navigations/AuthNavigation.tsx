import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/LoginScreen';
import RegisterScreen from '@screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function AuthNaviagtion() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={() => ({
          title: '',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={() => ({
          title: '',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default AuthNaviagtion;
