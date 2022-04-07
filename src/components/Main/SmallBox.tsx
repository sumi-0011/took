import {Center, Text} from 'native-base';
import React from 'react';

type Props = {title: string};

const SmallBox = ({title}: Props) => {
  return (
    <Center flex={1} bg="coolGray.100" rounded="md" shadow={3}>
      <Text bold fontSize={'lg'}>
        {title}
      </Text>
    </Center>
  );
};

export default SmallBox;
