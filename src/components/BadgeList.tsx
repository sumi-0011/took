import {Box, HStack, Text} from 'native-base';
import React from 'react';
import styled from 'styled-components/native';

type Props = {
  data: Array<string>;
};

const BadgeList = ({data}: Props) => {
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
};
// const Wrapper = styled(HStack)``;
const Badge = styled(Text)`
  background-color: #d1d5db;
`;
export default BadgeList;
