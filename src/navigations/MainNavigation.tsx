import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import MapScreen from '@screens/MapScreen';
import AuthNaviagtion from '@navigations/AuthNavigation';
import TCRegisterNavigation from '@navigations/TCRegisterNavigation';
import UserScreen from '@screens/UserScreen';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'TOOK',
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TCRScreen"
        component={TCRegisterNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthNaviagtion}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
