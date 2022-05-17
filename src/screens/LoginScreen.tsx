import {Button, Heading, Input, NativeBaseProvider, Stack} from 'native-base';
import React, {useState} from 'react';

function LoginScreen() {
  const [show, setShow] = useState(false);
  return (
    <NativeBaseProvider>
      <Stack
        space={4}
        h="100%"
        w="100%"
        backgroundColor="white"
        alignItems="center"
        justifyContent="center">
        <Heading fontSize="5xl">TOOK</Heading>
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          // InputLeftElement={<Icon size={5} ml="2" color="muted.400" />}
          placeholder="이메일을 입력해주세요."
        />
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          type={show ? 'text' : 'password'}
          // InputRightElement={}
          placeholder="비밀번호를 입력해주세요."
        />
        <Button
          w={{
            base: '75%',
            md: '25%',
          }}
          onPress={() => console.log('hello world')}>
          로그인
        </Button>
      </Stack>
    </NativeBaseProvider>
  );
}

export default LoginScreen;
