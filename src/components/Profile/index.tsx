import {Box, HStack, Image, Progress, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {getUserInfo} from '~/common/api/fireAuth';

import defaultAvata from '~/images/user.png';

function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState<string>();
  const [avata, setAvata] = useState<string>();
  const [userId, setUserId] = useState<string>();

  useEffect(() => {
    setIsLoading(true);
    const {photoURL, displayName, uid} = getUserInfo();

    setName(displayName ?? '');
    setAvata(photoURL ?? '');
    setUserId(uid);

    if (userId) {
      setIsLoading(false);
    }
  }, [userId]);

  if (isLoading) {
    return <Box>loading</Box>;
  }

  return (
    <VStack space={3}>
      <HStack justifyContent="space-between" alignItems="center">
        <Image
          size={16}
          source={avata ? {uri: avata} : defaultAvata}
          rounded="full"
          alt="avata"
        />

        <HStack
          alignContent="center"
          space={3}
          justifyContent="space-evenly"
          marginTop={3}
          h={25}>
          <Text fontSize="lg">{name} 님 안녕하세요! 😚</Text>
        </HStack>
      </HStack>
      <Progress value={45} size="lg" marginY={5} colorScheme="tertiary" />
    </VStack>
  );
}

export default Profile;
