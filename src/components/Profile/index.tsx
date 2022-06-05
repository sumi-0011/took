import {Box, HStack, Image, Progress, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {getUserInfo} from '@common/api/fireAuth';
import defaultAvata from '@images/user.png';
import {IUser} from 'types/User';

function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<IUser>();

  useEffect(() => {
    setIsLoading(true);
    const {photoURL, displayName, uid} = getUserInfo();

    setUserInfo({
      photoURL: photoURL ?? '',
      displayName: displayName ?? '회원',
      uid: uid ?? '',
    });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Box>loading</Box>;
  }

  return (
    <VStack space={3}>
      <HStack justifyContent="space-between" alignItems="center">
        <Image
          size={16}
          source={userInfo?.photoURL ? {uri: userInfo.photoURL} : defaultAvata}
          rounded="full"
          alt="avata"
        />

        <HStack
          alignContent="center"
          space={3}
          justifyContent="space-evenly"
          marginTop={3}
          h={25}>
          <Text fontSize="lg">{userInfo?.displayName} 님 안녕하세요! 😚</Text>
        </HStack>
      </HStack>
      <Progress value={45} size="lg" marginY={5} colorScheme="tertiary" />
    </VStack>
  );
}

export default Profile;
