import {Box, Button, NativeBaseProvider, Text, VStack} from 'native-base';
import React from 'react';
import Input from '~/components/Input';

function RegisterScren() {
  return (
    <NativeBaseProvider>
      <Box h="100%" w="100%" paddingTop={20} backgroundColor="white">
        <VStack alignItems="center" justifyContent="center" space={12}>
          <Input type="text" ph="이메일을 입력해주세요" />
          <VStack space={6}>
            <Input type="password" ph="비밀번호를 입력해주세요" />
            <Input type="password" ph="비밀번호를 다시 입력해주세요" />
          </VStack>
          <Input type="text" ph="닉네임을 입력해주세요" />
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
