import React, {useState} from 'react';
import {Box, Center, HStack, ScrollView, Text, VStack} from 'native-base';
import {getUserInfo} from '@api/fireAuthAPI';
import PressableBox from './PressableBox';
import Header from './Header';
import BackgroundImage from './BackgroundImage';
import ClosetTrashCanBox from './ClosetTrashCanBox';

function HomeScreen({navigation}: any) {
  const [name] = useState(getUserInfo().displayName);

  return (
    <ScrollView bg="white">
      <Box p={6} alignContent="center">
        <VStack justifyContent="space-evenly" space={7} h="100%">
          <Header name={name} />
          <HStack w="100%" space={4} height="48">
            <PressableBox
              flex={1}
              onPress={() => navigation.navigate('MapScreen')}>
              <BackgroundImage img="https://media.istockphoto.com/vectors/abstract-city-map-simple-map-illustration-vector-id685869052?s=612x612">
                <VStack
                  flex={1}
                  justifyContent="flex-end"
                  alignItems="center"
                  paddingBottom={5}>
                  <Text fontSize="lg" color="white" bold>
                    지도에서
                  </Text>
                  <Text fontSize="xl" color="white" bold>
                    쓰레기통 찾기
                  </Text>
                </VStack>
              </BackgroundImage>
            </PressableBox>
            <PressableBox
              flex={1}
              onPress={() => navigation.navigate('TCRScreen')}>
              <BackgroundImage img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSm2-zWd0cNNhehI_h34ZMZPK0Qj9tf8l39w&usqp=CAU">
                <VStack
                  flex={1}
                  justifyContent="flex-end"
                  alignItems="center"
                  paddingBottom={5}>
                  <Text fontSize="lg" color="white" bold>
                    쓰레기통
                  </Text>
                  <Text fontSize="xl" color="white" bold>
                    위치 등록하기
                  </Text>
                </VStack>
              </BackgroundImage>
            </PressableBox>
          </HStack>
          <ClosetTrashCanBox />
          <HStack space={5} height="24" marginTop="3">
            <PressableBox
              bg="trueGray.100"
              flex={1}
              height="24"
              onPress={() => navigation.navigate('UserRootScreen')}>
              <Center>
                <Text fontSize="lg" bold>
                  MY TOOK
                </Text>
              </Center>
            </PressableBox>
            <PressableBox
              bg="trueGray.100"
              flex={1}
              height="24"
              onPress={() => console.log('FAQ clicked')}>
              <Center>
                <Text fontSize="lg" bold>
                  FAQ
                </Text>
              </Center>
            </PressableBox>
          </HStack>
        </VStack>
      </Box>
    </ScrollView>
  );
}

export default HomeScreen;
