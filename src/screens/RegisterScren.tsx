import {
  Box,
  Button,
  Heading,
  Input,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

function RegisterScren() {
  return (
    <NativeBaseProvider>
      <Box h="100%" w="100%" paddingTop={20} backgroundColor="white">
        <VStack alignItems="center" justifyContent="center" space={12}>
          <Input
            w={96}
            h={12}
            // InputLeftElement={<Icon size={5} ml="2" color="muted.400" />}
            placeholder="이메일을 입력해주세요."
            fontSize="16px"
            variant="underlined"
          />
          <VStack space={6}>
            <Input
              w={96}
              h={12}
              // InputRightElement={}
              placeholder="비밀번호를 입력해주세요."
              fontSize="16px"
              variant="underlined"
            />
            <Input
              w={96}
              h={12}
              // InputRightElement={}
              placeholder="비밀번호를 다시 입력해주세요."
              fontSize="16px"
              variant="underlined"
            />
          </VStack>
          <Input
            w={96}
            h={12}
            // InputLeftElement={<Icon size={5} ml="2" color="muted.400" />}
            placeholder="닉네임을 입력해주세요"
            fontSize="16px"
            variant="underlined"
          />
          <Button
            marginTop={'10'}
            colorScheme={'blue'}
            w={96}
            padding={'4'}
            onPress={() => console.log('hello world')}>
            <Text color={'white'} fontSize={'16px'}>
              회원가입
            </Text>
          </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default RegisterScren;
