import React, {useEffect, useState} from 'react';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import UserInfoScreen from './UserInfoScreen';
import UserFlatList from './UserFlatList';
import {Animated, StyleSheet} from 'react-native';
import {getRegisterTrashCans, getStaredTrashCans} from '@common/api/trashCan';
import {ITrashCanInfo} from 'types/TrashCan';
import {Box, HStack, Text, VStack} from 'native-base';

const {event, ValueXY} = Animated;
const scrollY = new ValueXY();

function UserScreen({navigation}: any) {
  const [staredTrashCans, setStaredTrashCans] = useState<ITrashCanInfo[]>();
  const [registedTrashCans, setRegistedTrashCans] = useState<ITrashCanInfo[]>();

  useEffect(() => {
    async function fetchData() {
      const stared = await getStaredTrashCans();
      const registed = await getRegisterTrashCans();

      setStaredTrashCans(stared);
      setRegistedTrashCans(registed);
    }

    fetchData();
  }, []);

  return (
    <Box marginY="10px" backgroundColor="white">
      <VStack>
        <HStack marginX="30px" space={4} alignContent="center" paddingY="15px">
          {/* <Ionicons name="mail-outline" size={25} /> */}
          <Text fontSize="16px" alignSelf="center">
            피드백 보내기
          </Text>
        </HStack>
        <HStack marginX="30px" space={4} alignContent="center" paddingY="15px">
          {/* <Ionicons name="list-outline" size={25} /> */}
          <Text fontSize="16px" alignSelf="center">
            키워드 등록
          </Text>
        </HStack>
        <HStack
          marginX="30px"
          paddingY="15px"
          alignContent="center"
          justifyContent="space-between">
          <HStack space={4}>
            {/* <Ionicons name="moon-outline" size={25} /> */}
            <Text fontSize="16px" alignSelf="center">
              다크모드
            </Text>
          </HStack>
          {/* <Switch alignSelf="center" /> */}
        </HStack>
      </VStack>
    </Box>
  );
}

export default UserScreen;
