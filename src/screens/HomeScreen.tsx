import React from 'react';
import {NativeBaseProvider, Box, HStack, VStack} from 'native-base';
import {
  MainBox,
  NearByTrashBox,
  ProfileBox,
  SmallBox,
} from '~/components/Main/index';

function HomeScreen({navigation}: any) {
  return (
    <NativeBaseProvider>
      <Box
        w="100%"
        h="100%"
        p={5}
        alignContent="center"
        backgroundColor={'white'}>
        <VStack justifyContent="space-evenly" space={5} h="100%">
          <ProfileBox onPress={() => navigation.navigate('UserScreen')} />
          <HStack w="100%" space={5} flex={2}>
            <MainBox
              sub="지도에서"
              main="쓰레기통 찾기"
              img="https://media.istockphoto.com/vectors/abstract-city-map-simple-map-illustration-vector-id685869052?s=612x612"
              onPress={() => navigation.navigate('MapScreen')}
            />
            <MainBox
              sub="쓰레기통"
              main="위치 등록하기"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSm2-zWd0cNNhehI_h34ZMZPK0Qj9tf8l39w&usqp=CAU"
              onPress={() => navigation.navigate('TCRScreen')}
            />
          </HStack>
          <NearByTrashBox />
          <HStack w="100%" space={5} flex={1}>
            <SmallBox title="MY TOOK" />
            <SmallBox title="FAQ" />
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default HomeScreen;
