import React from 'react';
import {Pressable, Text} from 'native-base';

type IIconButton = {
  icon: React.ReactNode;
  text: string;
  onPress?: () => void;
};
// NOTE : icon button이 필요없으면 제거
function IconBtn({icon, text, onPress}: IIconButton) {
  return (
    <Pressable
      flexDirection={'row'}
      justifyContent="center"
      alignItems={'center'}
      flex="1"
      p={3}
      onPress={onPress}>
      {icon}
      <Text color="#767676" marginLeft={'10px'}>
        {text}
      </Text>
    </Pressable>
  );
}

export default IconBtn;
