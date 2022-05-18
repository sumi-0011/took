import {
  Box,
  Button,
  HStack,
  Icon,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '~/components/Input';
import {useForm, Controller} from 'react-hook-form';
import ErrorMsg from '~/components/ErrorMsg';

interface FormData {
  email: string;
  password: string;
}

function LoginScreen({navigation}: any) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <NativeBaseProvider>
      <Box h="100%" w="100%" paddingTop={20} backgroundColor="white">
        <VStack alignItems="center" justifyContent="center">
          <VStack space={6}>
            <VStack space={3}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    type="text"
                    ph="이메일을 입력해주세요."
                    value={value}
                  />
                )}
                name="email"
              />
              {errors.email && <ErrorMsg>필수 입력 사항입니다!</ErrorMsg>}
            </VStack>
            <VStack space={3}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    type="password"
                    ph="비밀번호를 입력해주세요."
                    value={value}
                  />
                )}
                name="password"
              />
              {errors.password && <ErrorMsg>필수 입력 사항입니다!</ErrorMsg>}
            </VStack>
          </VStack>
          <VStack space={5} marginTop={16}>
            <Button
              colorScheme={'blue'}
              w={96}
              padding={'4'}
              onPress={handleSubmit(onSubmit)}>
              <Text color={'white'} fontSize={'16px'}>
                로그인
              </Text>
            </Button>
            <Button
              variant="unstyled"
              w={'96'}
              padding={'4'}
              onPress={() => navigation.navigate('Regist')}>
              <Text color={'black'} fontSize={'16px'}>
                회원가입
              </Text>
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
