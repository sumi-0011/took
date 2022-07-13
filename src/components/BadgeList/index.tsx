import React from 'react';
import {HStack, Text, Box} from 'native-base';

interface IBadgeList {
  data: string[];
  bgColor?: string;
  color?: string;
}

function BadgeList({data, bgColor, color}: IBadgeList) {
  return (
    <HStack space={1} marginY="2">
      {data.map((item, index) => (
        <Box
          key={`tag${index}`}
          borderRadius={5}
          bgColor={bgColor ?? '#d1d5db'}
          p={'5px 10px'}>
          <Text color={color ?? '#353535'} fontSize="xs">
            {item}
          </Text>
        </Box>
      ))}
    </HStack>
  );
}

export default BadgeList;
