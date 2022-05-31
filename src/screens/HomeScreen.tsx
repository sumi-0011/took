import React, {useEffect} from 'react';
import {Box, Center, HStack, Text, VStack} from 'native-base';
import Header from '@components/Header';
import PressableBox from '@components/PressableBox';
import Profile from '@components/Profile';
import BackgroundImage from '@components/BackgroundImage';
import TagList from '@components/TagList';

function HomeScreen({navigation}: any) {
  return (
    <Box w="100%" bg="white" h="100%" p={5} alignContent="center">
      <VStack justifyContent="space-evenly" space={5} h="100%">
        <Header onPress={() => console.log('clicked')} />
        <PressableBox flex={1.5} bg="coolGray.100" paddingX={8}>
          <Profile />
        </PressableBox>
        <HStack w="100%" space={5} flex={2}>
          <PressableBox
            flex={1}
            onPress={() => navigation.navigate('MapScreen')}>
            <BackgroundImage img="https://media.istockphoto.com/vectors/abstract-city-map-simple-map-illustration-vector-id685869052?s=612x612">
              <VStack
                flex={1}
                justifyContent="flex-end"
                alignItems="center"
                paddingBottom={5}>
                <Text fontSize="md" color="white" bold>
                  지도에서
                </Text>
                <Text fontSize="lg" color="white" bold>
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
                <Text fontSize="md" color="white" bold>
                  쓰레기통
                </Text>
                <Text fontSize="lg" color="white" bold>
                  위치 등록하기
                </Text>
              </VStack>
            </BackgroundImage>
          </PressableBox>
        </HStack>
        <PressableBox flex={1.5} onPress={() => console.log('clicked')}>
          <BackgroundImage
            img={
              'https://img.freepik.com/free-photo/white-paper-in-the-trash-can_144627-45832.jpg?size=626&ext=jpg&ga=GA1.2.1908636980.1634256000'
            }>
            <VStack p={5} flex={1} justifyContent="space-between">
              <Text fontSize="lg" color="white" bold>
                가장 가까운 쓰레기통
              </Text>
              <VStack alignItems={'flex-end'} space="1">
                <Text color="white" fontSize="lg">
                  공대 5호관 1층
                </Text>
                <TagList
                  color="white"
                  fontSize="xs"
                  list={['플라스틱', '유리병']}
                />
              </VStack>
            </VStack>
          </BackgroundImage>
        </PressableBox>
        <HStack space={5} flex={1}>
          <PressableBox
            bg="coolGray.100"
            flex={1}
            onPress={() => navigation.navigate('UserScreen')}>
            <Center>
              <Text fontSize="lg" bold>
                MY TOOK
              </Text>
            </Center>
          </PressableBox>
          <PressableBox
            bg="coolGray.100"
            flex={1}
            onPress={() => console.log('clicked')}>
            <Center>
              <Text fontSize="lg" bold>
                FAQ
              </Text>
            </Center>
          </PressableBox>
        </HStack>
      </VStack>
    </Box>
  );
}

export default HomeScreen;
