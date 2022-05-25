import {Box, HStack, Image} from 'native-base';
import React from 'react';
import {SettingIcon} from '../Icon';
import logo from '@images/logo.png';

interface IHeader {
  onPress: () => void;
}

function Header({onPress}: IHeader) {
  return (
    <Box paddingX={3} paddingY={2}>
      <HStack alignContent="center" justifyContent="space-between">
        <Image
          source={logo}
          alt="image"
          resizeMode="contain"
          width="1/5"
          height="auto"
        />
        <SettingIcon onPress={onPress} />
      </HStack>
    </Box>
  );
}

export default Header;
