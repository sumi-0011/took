import React, {useState} from 'react';
import * as yup from 'yup';
import {Box, Button, Text, VStack} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Input from '@components/Input';
import ErrorMsg from '@components/ErrorMsg';
import {signIn} from 'api/fireAuth';
import {UserAuthData} from 'types/AuthType';
import ScreenHeader from '@components/ScreenHeader';

function LoginScreen({navigation}: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(7).required(),
  });

  const formOptions = {resolver: yupResolver(schema)};

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<UserAuthData>(formOptions);

  const onSubmit = async (data: UserAuthData) => {
    setIsLoading(true);
    try {
      const res = await signIn(data.email, data.password);

      if (res.status === 'fail') {
        setErrorMsg(res.message);
      } else if (res?.status === 'success') {
        navigation.replace('HomeScreen');
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Box h="100%" backgroundColor="white">
      <ScreenHeader text="로그인" />
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
          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <Button
            colorScheme={'green'}
            variant={'light'}
            isLoading={isLoading}
            w={96}
            padding={'4'}
            onPress={handleSubmit(onSubmit)}
            borderRadius="sm">
            <Text color={'white'} fontSize={'16px'} fontWeight="bold">
              로그인
            </Text>
          </Button>
          <Button
            variant="unstyled"
            w={96}
            padding={'4'}
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text color={'black'} fontSize={'16px'}>
              회원가입
            </Text>
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}

export default LoginScreen;
