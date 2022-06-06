import React from 'react';
import {Box, Heading, HStack, Image, Stack} from 'native-base';
import logo from '@images/logo.png';

interface IHeader {
  name: string | null | undefined;
}

function Header({name = '홍길동'}: IHeader) {
  return (
    <Box paddingX="2" paddingY="5">
      <Stack space="12">
        <Image
          source={logo}
          alt="image"
          resizeMode="contain"
          width="24"
          height="8"
        />
        <Stack space="2">
          <HStack space="1">
            <Heading fontSize="3xl" fontWeight="extrabold">
              {name}
            </Heading>
            <Heading fontSize="3xl" fontWeight="thin">
              님
            </Heading>
          </HStack>
          <Heading fontSize="3xl" fontWeight="thin">
            환영해요 😄
          </Heading>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Header;
