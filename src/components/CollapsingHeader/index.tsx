import React, {memo} from 'react';
import {HStack, Image, Text, VStack} from 'native-base';
import defaultAvata from '@images/user.png';

interface ICollapshingHeader {
  photo: string;
  name: string;
  bio: string;
}

function CollapshingHeader({name, photo, bio}: ICollapshingHeader) {
  return (
    <HStack backgroundColor="white" justifyContent="center" paddingY={10}>
      <Image
        height={100}
        width={100}
        borderRadius={100 / 2}
        source={photo ? {uri: photo} : defaultAvata}
        alt="avata"
      />
      <VStack marginLeft={20} justifyContent="center">
        <Text fontSize={24} fontWeight="700">
          {name}
        </Text>
        <Text fontSize={15} marginTop={4}>
          {bio}
        </Text>
      </VStack>
    </HStack>
  );
}

export default memo(CollapshingHeader);
