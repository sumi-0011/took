import {ChevronLeftIcon, IconButton} from 'native-base';
import React from 'react';

interface BackButtonProps {
  navigation: any;
}

function BackButton({navigation}: BackButtonProps) {
  return (
    <IconButton
      w="50px"
      h="50px"
      backgroundColor="#fff"
      margin="10px"
      position="absolute"
      top="10px"
      left="10px"
      zIndex="10"
      borderRadius="full"
      icon={<ChevronLeftIcon />}
      _icon={{
        color: 'black',
        size: 'sm',
      }}
      onPress={() => navigation.pop()}
    />
  );
}

export default BackButton;
