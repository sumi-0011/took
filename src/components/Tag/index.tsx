import {Badge, Text} from 'native-base';
import React from 'react';

interface ITag {
  item: string;
}

function Tag({item}: ITag) {
  return (
    <Badge
      colorScheme="green"
      _text={{
        fontSize: 10,
      }}
      rounded="md"
      maxWidth={'80px'}
      textOverflow="revert">
      <Text numberOfLines={1} color="green.600" fontSize={'10px'}>
        {item}
      </Text>
    </Badge>
  );
}

export default Tag;
