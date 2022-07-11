import React, {useState} from 'react';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {Box, Button, Text, VStack} from 'native-base';
import {signUp} from '@api/fireAuthAPI';
import Input from '@components/Input';
import ErrorMsg from '@components/ErrorMsg';
import {SignUpData} from 'types/AuthType';
import ScreenHeader from '@components/ScreenHeader';

function SignupScreen({navigation}: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(7).required(),
    checkPassword: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required(),
    name: yup.string().required(),
  });

  const formOptions = {resolver: yupResolver(schema)};

  const onSubmit = async (data: SignUpData) => {
    setIsLoading(true);
    try {
      const res = await signUp(data.email, data.password, data.name);

      if (res.status === 'fail') {
        setErrorMsg(res.message);
      } else if (res.status === 'success') {
        navigation.replace('HomeScreen');
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpData>(formOptions);

  return (
    <Box h="100%" backgroundColor="white">
      <ScreenHeader text="회원가입" />
      <VStack alignItems="center" justifyContent="center" space={12}>
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
                  type="password"
                  ph="비밀번호를 입력해주세요"
                />
              )}
              name="password"
            />
            {errors.password && (
              <ErrorMsg>비밀번호를 다시 확인해주세요</ErrorMsg>
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
                  value={value}
                  type="password"
                  ph="비밀번호를 다시 입력해주세요"
                />
              )}
              name="checkPassword"
            />
            {errors.checkPassword && (
              <ErrorMsg>비밀번호가 일치하지 않습니다</ErrorMsg>
            )}
          </VStack>
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
                value={value}
                type="text"
                ph="닉네임을 입력해주세요"
              />
            )}
            name="name"
          />
          {errors.name && <ErrorMsg>닉네임을 다시 확인해주세요</ErrorMsg>}
        </VStack>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        <Button
          colorScheme={'green'}
          variant={'light'}
          isLoading={isLoading}
          marginTop={'10'}
          borderRadius="sm"
          w={96}
          padding={'4'}
          onPress={handleSubmit(onSubmit)}>
          <Text color={'white'} fontSize={'16px'} fontWeight="bold">
            회원가입
          </Text>
        </Button>
      </VStack>
    </Box>
  );
}

export default SignupScreen;
