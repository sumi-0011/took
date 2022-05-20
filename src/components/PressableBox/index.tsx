import React, {ReactNode} from 'react';
import {Box, Pressable} from 'native-base';

interface IPressableBox {
  flex: number;
  bg?: string;
  children: ReactNode;
  paddingX?: number;
  onPress: () => void;
}

function PressableBox({children, onPress, ...rest}: IPressableBox) {
  return (
    <Box
      shadow={0}
      flex={rest.flex}
      bg={rest.bg}
      rounded="xl"
      paddingX={rest.paddingX}
      justifyContent="center"
      overflow="hidden">
      <Pressable onPress={onPress}>
        {({isPressed}) => {
          return <Box opacity={isPressed ? 0.5 : 1}>{children}</Box>;
        }}
      </Pressable>
    </Box>
  );
}

export default PressableBox;
