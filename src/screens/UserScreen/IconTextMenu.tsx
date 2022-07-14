import React, {ReactNode} from 'react';
import {HStack, Pressable, Text} from 'native-base';
import {RightArrowIcon} from '@components/Icon';

interface IIconTeextMenu {
  icon: ReactNode;
  text: string;
  onPress: () => void;
}

function IconTextMenu({icon, text, onPress}: IIconTeextMenu) {
  return (
    <Pressable onPress={onPress}>
      {({isPressed}) => {
        return (
          <HStack
            paddingX="12"
            alignItems="center"
            justifyContent="space-between"
            background={isPressed ? 'coolGray.200' : 'white'}>
            <HStack space={4} alignItems="center" paddingY="5">
              {icon}
              <Text fontSize="lg" alignSelf="center" fontWeight="thin">
                {text}
              </Text>
            </HStack>
            <RightArrowIcon />
          </HStack>
        );
      }}
    </Pressable>
  );
}

export default IconTextMenu;
