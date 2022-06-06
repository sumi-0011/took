import {Box, Button, HStack, Progress, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {getUserInfo} from '@common/api/fireAuth';
import {IUser} from 'types/User';
import {MailIcon} from '@components/Icon';

interface IProfile {
  onPress: () => void;
}

function Profile({onPress}: IProfile) {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<IUser>();

  useEffect(() => {
    setIsLoading(true);
    const {photoURL, displayName, uid, email} = getUserInfo();

    setUserInfo({
      photoURL: photoURL ?? '',
      displayName: displayName ?? '회원',
      uid: uid ?? '',
      email: email ?? '',
    });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Box>loading</Box>;
  }

  return (
    <VStack
      p="10"
      space={3}
      borderBottomColor="coolGray.200"
      borderBottomWidth="1">
      <VStack space={2} marginBottom="6">
        <Text fontSize="2xl" bold>
          {userInfo?.displayName}
        </Text>
        <HStack justifyContent="space-between">
          <HStack space={2} alignItems="center">
            <MailIcon size={20} />
            <Text fontSize="md">{userInfo?.email}</Text>
          </HStack>
          <Button variant="link" colorScheme="green" onPress={onPress}>
            비밀번호 변경
          </Button>
        </HStack>
      </VStack>
      <HStack justifyContent="space-evenly">
        <VStack justifyContent="center" alignItems="center" space="2">
          <Text fontSize="3xl" bold>
            42
          </Text>
          <Text>쓰레기 버린 횟수</Text>
        </VStack>
        <VStack justifyContent="center" alignItems="center" space="2">
          <Text fontSize="3xl" bold>
            10
          </Text>
          <Text>쓰레기통 발견 횟수</Text>
        </VStack>
      </HStack>
      <Progress value={45} size="lg" marginY={5} colorScheme="green" />
    </VStack>
  );
}

export default Profile;
