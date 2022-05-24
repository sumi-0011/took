import React from 'react';
import {HStack, Text} from 'native-base';

interface ITag {
  list: Array<String>;
  color: string;
  fontSize: string;
}

function TagList({list, ...rest}: ITag) {
  return (
    <HStack>
      {list.map((item, index) => (
        <Text key={index} {...rest}>
          #{item}
        </Text>
      ))}
    </HStack>
  );
}

export default TagList;
