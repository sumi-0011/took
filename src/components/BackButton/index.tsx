import {ChevronLeftIcon, IconButton} from 'native-base';
import React from 'react';

interface BackButtonProps {
  onPress: () => void;
}

function BackButton({onPress}: BackButtonProps) {
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
      onPress={onPress}
    />
  );
}

export default BackButton;
