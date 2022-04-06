import React from 'react';
import {
  NativeBaseProvider,
  Box,
  AspectRatio,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Avatar,
} from 'native-base';
// import ProfileBox from 'components/ProfileBox';
import ProfileBox from 'components/ProfileBox';

type Props = {};

function Main() {
  return (
    <NativeBaseProvider>
      <Box w="100%" h="100%" p={5} alignContent="center">
        <VStack justifyContent="space-evenly" space={5} h="100%">
          <ProfileBox />
          <HStack w="100%" space={5} flex={2}>
            <Box flex={1} bg="coolGray.100" rounded="md" shadow={3} />
            <Box flex={1} bg="coolGray.100" rounded="md" shadow={3} />
          </HStack>
          <Box w="100%" bg="coolGray.100" rounded="md" shadow={3} flex={1.5} />
          <HStack w="100%" space={5} flex={1}>
            <Box flex={1} bg="coolGray.100" rounded="md" shadow={3} />
            <Box flex={1} bg="coolGray.100" rounded="md" shadow={3} />
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default Main;
