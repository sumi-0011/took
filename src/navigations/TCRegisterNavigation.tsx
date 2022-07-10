import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from '@screens/CameraScreen';
import TCRCategoryScreen from '@screens/TCRCategoryScreen';
import TCRInfoScreen from '@screens/TCRInfoScreen';

const Stack = createNativeStackNavigator();

function TCRegisterNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TCRCategoryScreen"
        component={TCRCategoryScreen}
        options={() => ({
          title: '쓰레기통 등록하기',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="TCRInfoScreen"
        component={TCRInfoScreen}
        options={() => ({
          title: '쓰레기통 등록하기',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default TCRegisterNavigation;
