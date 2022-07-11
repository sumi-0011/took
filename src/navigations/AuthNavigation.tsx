import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninScreen from '@screens/SigninScreen';
import SignupScreen from '@screens/SignupScreen';

const Stack = createNativeStackNavigator();

function AuthNaviagtion() {
  return (
    <Stack.Navigator initialRouteName="SigninScreen">
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={() => ({
          title: '',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={() => ({
          title: '',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default AuthNaviagtion;
