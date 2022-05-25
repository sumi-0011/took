import React from 'react';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {Box, Button, Text, VStack} from 'native-base';
import {signUp} from '@common/api/fireAuth';
import Input from '@components/Input';
import ErrorMsg from '@components/ErrorMsg';

interface FormData {
  email: string;
  password: string;
  checkPassword: string;
  name: string;
}

function RegisterScreen({navigation}: any) {
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

  const onSubmit = async (data: FormData) => {
    const res = await signUp(data.email, data.password, data.name);

    if (res?.statusCode === 200) {
      navigation.replace('TOOK');
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>(formOptions);

  return (
    <Box h="100%" w="100%" paddingTop={20} backgroundColor="white">
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
        <Button
          marginTop={'10'}
          colorScheme={'blue'}
          w={96}
          padding={'4'}
          onPress={handleSubmit(onSubmit)}>
          <Text color={'white'} fontSize={'16px'}>
            회원가입
          </Text>
        </Button>
      </VStack>
    </Box>
  );
}

export default RegisterScreen;
