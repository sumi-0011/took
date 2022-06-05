import {signOut, withdrawal} from '@common/api/fireAuth';
import {Button, Heading, ScrollView} from 'native-base';
import React from 'react';

function UserInfoScreen({navigation}: any) {
  const onWithdrawal = async () => {
    const result = await withdrawal();
    console.log(result);

    navigation.replace('HomeScreen');
  };
  const onSignOut = async () => {
    signOut();
    navigation.replace('HomeScreen');
  };

  return (
    <ScrollView>
      <Heading fontSize="2xl" fontWeight="bold" color="green.600">
        내 정보
      </Heading>
      <Button
        onPress={onSignOut}
        marginX="10"
        marginY="3"
        colorScheme="green"
        variant="outline">
        로그아웃
      </Button>
      <Button
        onPress={onWithdrawal}
        marginX="10"
        marginY="3"
        colorScheme="green"
        variant="outline">
        회원탈퇴
      </Button>
    </ScrollView>
  );
}

export default UserInfoScreen;
