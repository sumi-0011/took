import {
  Box,
  Button,
  HStack,
  Icon,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '~/components/Input';

function LoginScreen({navigation}: any) {
  const [show, setShow] = useState(false);
  return (
    <NativeBaseProvider>
      <Box h="100%" w="100%" paddingTop={20} backgroundColor="white">
        <VStack alignItems="center" justifyContent="center">
          <VStack space={6}>
            <Input type="text" ph="이메일을 입력해주세요." />
            <Input
              type={show ? 'text' : 'password'}
              ph="비밀번호를 입력해주세요."
            />
          </VStack>
          <VStack space={5} marginTop={16}>
            <Button
              colorScheme={'blue'}
              w={96}
              padding={'4'}
              onPress={() => console.log('hello world')}>
              <Text color={'white'} fontSize={'16px'}>
                로그인
              </Text>
            </Button>
            <Button
              variant="unstyled"
              w={'96'}
              padding={'4'}
              size="lg"
              onPress={() => navigation.navigate('Regist')}>
              회원가입
            </Button>
          </VStack>
          <VStack marginTop={16}>
            <Button
              backgroundColor={'light.100'}
              w={96}
              padding={4}
              onPress={() => console.log('google login')}>
              <HStack
                w={96}
                paddingX={4}
                alignItems={'center'}
                justifyContent="space-between">
                <Icon
                  as={Ionicons}
                  name="logo-google"
                  size="md"
                  color={'black'}
                />
                <Text fontSize={'16px'}>구글 아이디로 로그인</Text>
                <Icon
                  as={Ionicons}
                  name="chevron-forward-outline"
                  size={'md'}
                />
              </HStack>
            </Button>
          </VStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default LoginScreen;
