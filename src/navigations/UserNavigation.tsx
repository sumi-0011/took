import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen from '@screens/UserScreen';
import UserChangeInfoScreen from '@screens/UserChangeInfoScreen';
import UserTCRScreen from '@screens/UserTCRScreen';
import UserStarScreen from '@screens/UserStarScreen';
import UserWithdrawalScreen from '@screens/UserWithdrawalScreen';

const Stack = createNativeStackNavigator();

function UserNaviagtion() {
  return (
    <Stack.Navigator initialRouteName="UserScreen">
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
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
        name="UserChangeInfoScreen"
        component={UserChangeInfoScreen}
        options={() => ({
          title: '비밀번호 변경',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="UserTCRScreen"
        component={UserTCRScreen}
        options={() => ({
          title: '내가 등록한 쓰레기통',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="UserStarScreen"
        component={UserStarScreen}
        options={() => ({
          title: '즐겨찾기한 쓰레기통',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="UserWithdrawalScreen"
        component={UserWithdrawalScreen}
        options={() => ({
          title: '회원 탈퇴',
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

export default UserNaviagtion;
