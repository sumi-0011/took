import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  NativeBaseProvider,
  Stack,
  VStack,
} from 'native-base';
import React, {useState} from 'react';

function LoginScreen({navigation}: any) {
  const [show, setShow] = useState(false);
  return (
    <NativeBaseProvider>
      <Box h="100%" w="100%" paddingTop={20} backgroundColor="white">
        <VStack alignItems="center" justifyContent="center">
          <VStack space={6}>
            <Input
              w={96}
              h={12}
              // InputLeftElement={<Icon size={5} ml="2" color="muted.400" />}
              placeholder="이메일을 입력해주세요."
              fontSize="16px"
              variant="underlined"
            />
            <Input
              w={96}
              h={12}
              type={show ? 'text' : 'password'}
              // InputRightElement={}
              placeholder="비밀번호를 입력해주세요."
              fontSize="16px"
              variant="underlined"
            />
          </VStack>
          <VStack space={5} marginTop={16}>
            <Button
              colorScheme={'blue'}
              w={96}
              h={12}
              size="lg"
              onPress={() => console.log('hello world')}>
              로그인
            </Button>
            <Button
              variant="unstyled"
              w={'96'}
              size="lg"
              onPress={() => navigation.navigate('Regist')}>
              회원가입
            </Button>
          </VStack>
          <VStack marginTop={16}>
            <Button
              colorScheme={'dark'}
              w={96}
              h={12}
              size="lg"
              onPress={() => navigation.navigate('Regist')}>
              구글로 로그인
            </Button>
          </VStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default LoginScreen;
