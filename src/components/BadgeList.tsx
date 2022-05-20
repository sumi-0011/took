import React from 'react';
import {HStack, Text} from 'native-base';
import styled from 'styled-components/native';

interface IBadgeList {
  data: Array<string>;
}

function BadgeList({data}: IBadgeList) {
  return (
    <HStack space={1} marginY="2">
      {data.map((item, index) => (
        <Badge
          key={`tag${index}`}
          paddingX={2}
          paddingY={1}
          borderRadius={5}
          fontSize="xs">
          {item}
        </Badge>
      ))}
    </HStack>
  );
}

const Badge = styled(Text)`
  background-color: #d1d5db;
`;

export default BadgeList;
