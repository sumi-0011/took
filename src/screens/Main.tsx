import React from 'react';
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Center,
} from 'native-base';
// import ProfileBox from 'components/ProfileBox';
import ProfileBox from 'components/ProfileBox';
import MainBox from '~/components/MainBox';
import NearByTrashBox from '~/components/NearByTrashBox';

type Props = {};

function Main() {
  return (
    <NativeBaseProvider>
      <Box
        w="100%"
        h="100%"
        p={5}
        alignContent="center"
        backgroundColor={'white'}>
        <VStack justifyContent="space-evenly" space={5} h="100%">
          <ProfileBox />
          <HStack w="100%" space={5} flex={2}>
            <MainBox
              sub="지도에서"
              main="쓰레기통 찾기"
              img="https://media.istockphoto.com/vectors/abstract-city-map-simple-map-illustration-vector-id685869052?s=612x612"
            />
            <MainBox
              sub="쓰레기통"
              main="위치 등록하기"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSm2-zWd0cNNhehI_h34ZMZPK0Qj9tf8l39w&usqp=CAU"
            />
          </HStack>
          <NearByTrashBox />
          <HStack w="100%" space={5} flex={1}>
            <Center flex={1} bg="coolGray.100" rounded="md" shadow={3}>
              <Text bold fontSize={'lg'}>
                MY TOOK
              </Text>
            </Center>
            <Center flex={1} bg="coolGray.100" rounded="md" shadow={3}>
              <Text bold fontSize={'lg'}>
                FAQ
              </Text>
            </Center>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default Main;
