import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from '@screens/TCRegister/CameraScreen';
import TCRCategoryScreen from '@screens/TCRegister/TCRCategoryScreen';
import TCRInfoScreen from '@screens/TCRegister/TCRInfoScreen';

const Stack = createNativeStackNavigator();

function TCRegisterNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TCRCategoryScreen"
        component={TCRCategoryScreen}
        options={{
          title: '쓰레기통 등록하기',
        }}
      />
      <Stack.Screen
        name="TCRInfoScreen"
        component={TCRInfoScreen}
        options={{
          title: '쓰레기통 등록하기',
        }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          title: 'camera',
        }}
      />
    </Stack.Navigator>
  );
}

export default TCRegisterNavigation;
