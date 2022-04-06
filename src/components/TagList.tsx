import {Flex, HStack, Text} from 'native-base';
import React from 'react';

type Props = {
  list: Array<String>;
  style?: Object;
};

const TagList = ({list, style}: Props) => {
  return (
    <HStack>
      {list.map((item, index) => (
        <Text key={index} {...style}>
          #{item}
        </Text>
      ))}
    </HStack>
  );
};
export default TagList;
