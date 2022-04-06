import {
  Box,
  Avatar,
  Progress,
  Text,
  Flex,
  ChevronRightIcon,
  HStack,
} from 'native-base';
import React from 'react';
import styled from 'styled-components/native';

type Props = {};

const ProfileBox = () => {
  return (
    <Box
      w="100%"
      bg="coolGray.100"
      rounded="md"
      shadow={3}
      flex={1.2}
      paddingX={8}
      paddingY={5}>
      <HStack space={2} justifyContent="space-between">
        <ProfileImage
          size={20}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/49177223?v=4',
          }}>
          Sumi
        </ProfileImage>
        <HStack
          alignContent="center"
          space={3}
          justifyContent="space-evenly"
          marginTop={3}
          h={25}>
          <Text fontSize="md" bold minW={150}>
            수미님 안녕하세요! 😚
          </Text>
          <ChevronRightIcon size="5" />
        </HStack>
      </HStack>
      <Progress value={45} size="lg" colorScheme="emerald" marginY={5} />
    </Box>
  );
};
const ProfileImage = styled(Avatar)``;
export default ProfileBox;
