import {Button, Text} from 'native-base';
import React from 'react';

interface TOOKBtnProps {
  name: string;
  onPress: () => void;
  isDisabled?: boolean;
}

function TOOKBtn({name, onPress, isDisabled}: TOOKBtnProps) {
  return (
    <Button
      colorScheme={'green'}
      variant={'light'}
      onPress={onPress}
      isDisabled={isDisabled}>
      <Text color={'white'} fontSize={'16px'} fontWeight="bold">
        {name}
      </Text>
    </Button>
  );
}

export default TOOKBtn;
