import React, {ReactNode} from 'react';
import {Box, Pressable} from 'native-base';
import {StyleSheet} from 'react-native';

interface IPressableBox {
  height?: string;
  bg?: string;
  flex?: number;
  children: ReactNode;
  onPress?: () => void;
  shadow?: boolean;
}

function PressableBox({children, onPress, shadow, ...rest}: IPressableBox) {
  return (
    <Pressable onPress={onPress} flex={rest.flex}>
      {({isPressed}) => {
        return (
          <Box
            style={!isPressed && shadow ? styles.boxWithShadow : []}
            h={rest.height}
            bg={rest.bg}
            rounded="2xl"
            justifyContent="center"
            overflow="hidden"
            opacity={isPressed ? 0.8 : 1}>
            {children}
          </Box>
        );
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boxWithShadow: {
    elevation: 10,
  },
});

export default PressableBox;
