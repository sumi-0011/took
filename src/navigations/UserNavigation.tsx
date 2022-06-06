import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen from '@screens/User/UserScreen';
import UserChangeInfoScreen from '@screens/User/UserChangeInfoScreen';
import UserTCRScreen from '@screens/User/UserTCRScreen';
import UserStarScreen from '@screens/User/UserStarScreen';
import UserWithdrawalScreen from '@screens/User/UserWithdrawalScreen';

const Stack = createNativeStackNavigator();

function UserNaviagtion() {
  return (
    <Stack.Navigator initialRouteName="UserScreen">
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserChangeInfoScreen"
        component={UserChangeInfoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserTCRScreen"
        component={UserTCRScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserStarScreen"
        component={UserStarScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserWithdrawalScreen"
        component={UserWithdrawalScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default UserNaviagtion;
