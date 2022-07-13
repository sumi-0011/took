import React from 'react';
import {ScrollView, Text, VStack} from 'native-base';
import {LogoutIcon, PushIcon, StarIcon} from '@components/Icon';
import {signOut} from '@api/fireAuthAPI';
import IconTextMenu from './IconTextMenu';
import Profile from './Profile';

function UserScreen({navigation}: any) {
  const handleSignout = () => {
    signOut();
    navigation.replace('HomeScreen');
  };

  return (
    <ScrollView paddingY="5" backgroundColor="white">
      <Profile onPress={() => navigation.navigate('UserChangeInfoScreen')} />
      <VStack paddingTop="8">
        <Text fontSize="lg" paddingX="10" paddingY="4" bold>
          내 활동
        </Text>
        <IconTextMenu
          onPress={() => navigation.navigate('UserTCRScreen')}
          icon={<PushIcon />}
          text="내가 등록한 쓰레기통"
        />
        <IconTextMenu
          onPress={() => navigation.navigate('UserStarScreen')}
          icon={<StarIcon />}
          text="즐겨찾기한 쓰레기통"
        />
      </VStack>
      <VStack paddingTop="8">
        <Text fontSize="lg" paddingX="10" paddingY="4" bold>
          회원정보
        </Text>
        <IconTextMenu
          onPress={handleSignout}
          icon={<LogoutIcon />}
          text="로그아웃"
        />
        <IconTextMenu
          onPress={() => navigation.navigate('UserWithdrawalScreen')}
          icon={<LogoutIcon />}
          text="회원탈퇴"
        />
      </VStack>
    </ScrollView>
  );
}

export default UserScreen;
