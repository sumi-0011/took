import React from 'react';
import * as yup from 'yup';
import {Box, Button, HStack, Icon, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Input from '@components/Input';
import ErrorMsg from '@components/ErrorMsg';
import {signIn} from '@common/api/fireAuth';

interface FormData {
  email: string;
  password: string;
}

function LoginScreen({navigation}: any) {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(7).required(),
  });

  const formOptions = {resolver: yupResolver(schema)};

  const onSubmit = (data: FormData) => {
    const result = signIn(data.email, data.password);

    console.log(result);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>(formOptions);

  return (
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
                  value={value}
                  type="text"
                  ph="이메일을 입력해주세요"
                />
              )}
              name="email"
            />
            {errors.email && (
              <ErrorMsg>이메일 형식이 올바르지 않습니다!</ErrorMsg>
            )}
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
                  ph="비밀번호를 입력해주세요"
                  value={value}
                />
              )}
              name="password"
            />
            {errors.password && (
              <ErrorMsg>비밀번호를 다시 확인해주세요!</ErrorMsg>
            )}
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
            onPress={() => navigation.navigate('RegisterScreen')}>
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
              <Icon as={Ionicons} name="chevron-forward-outline" size={'md'} />
            </HStack>
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}

export default LoginScreen;
