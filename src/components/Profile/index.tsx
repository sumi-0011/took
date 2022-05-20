import {Avatar, HStack, Progress, Text, VStack} from 'native-base';
import React from 'react';

function Profile() {
  return (
    <VStack space={3}>
      <HStack justifyContent="space-between" alignItems="center">
        <Avatar
          size={16}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/49177223?v=4',
          }}>
          Sumi
        </Avatar>
        <HStack
          alignContent="center"
          space={3}
          justifyContent="space-evenly"
          marginTop={3}
          h={25}>
          <Text fontSize="lg">수미님 안녕하세요! 😚</Text>
        </HStack>
      </HStack>
      <Progress value={45} size="lg" marginY={5} colorScheme="tertiary" />
    </VStack>
  );
}

export default Profile;
