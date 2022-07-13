import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TrashCanRegisterScreen from '@screens/TrashCanRegisterScreen';
import TrashCanRegisterCameraScreen from '@screens/TrashCanRegisterCameraScreen';
import TrachCanRegisterConfirmScreen from '@screens/TrashCanRegisterConfirmScreen';

const Stack = createNativeStackNavigator();

function TCRegisterNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrashCanRegisterScreen"
        component={TrashCanRegisterScreen}
        options={() => ({
          title: '쓰레기통 등록하기',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="TrachCanRegisterConfirmScreen"
        component={TrachCanRegisterConfirmScreen}
        options={() => ({
          title: '쓰레기통 등록하기',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="TrashCanRegisterCameraScreen"
        component={TrashCanRegisterCameraScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default TCRegisterNavigation;
