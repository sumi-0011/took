import {Button, Text} from 'native-base';
import React from 'react';

interface TOOKBtnProps {
  name: string;
  onPress: () => void;
}

function TOOKBtn({name, onPress}: TOOKBtnProps) {
  return (
    <Button colorScheme={'green'} variant={'light'} onPress={onPress}>
      <Text color={'white'} fontSize={'16px'} fontWeight="bold">
        {name}
      </Text>
    </Button>
  );
}

export default TOOKBtn;
