import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LoginScreen from '@screens/Auth/LoginScreen';
import {NativeBaseProvider} from 'native-base';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

function getComponent(props) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <LoginScreen {...props} />
    </NativeBaseProvider>
  );
}

describe('Form 렌더링 ...', () => {
  const props = {};
  const component = getComponent(props);

  test('email input이 존재', () => {
    const {getByPlaceholderText} = render(component);
    const input = getByPlaceholderText('이메일을 입력해주세요');
    expect(input).toBeTruthy();
  });

  test('password input이 존재', () => {
    const {getByPlaceholderText} = render(component);
    const input = getByPlaceholderText('비밀번호를 입력해주세요');
    expect(input).toBeTruthy();
  });

  test('로그인 버튼이 존재', () => {
    const {getByText} = render(component);
    const input = getByText('로그인');
    expect(input).toBeTruthy();
  });

  test('회원가입 버튼이 존재', () => {
    const {getByText} = render(component);
    const input = getByText('회원가입');
    expect(input).toBeTruthy();
  });
});

describe('Login validation ...', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  const component = getComponent(props);

  test('이메일이 유효하지 않을 때', async () => {
    const {getByPlaceholderText, getByText, findByText} = render(component);
    const emailInput = getByPlaceholderText('이메일을 입력해주세요');

    fireEvent.changeText(emailInput, 'qudals7613');

    const button = getByText('로그인');
    fireEvent.press(button);

    const error = await findByText('이메일 형식이 올바르지 않습니다!');
    expect(error).toBeTruthy();
  });

  test('비밀번호가 유효하지 않을 때', async () => {
    const {getByPlaceholderText, getByText, findByText} = render(component);

    const passwordInput = getByPlaceholderText('비밀번호를 입력해주세요');
    fireEvent.changeText(passwordInput, '1234');

    const button = getByText('로그인');
    fireEvent.press(button);

    const error = await findByText('비밀번호를 다시 확인해주세요!');
    expect(error).toBeTruthy();
  });
});
