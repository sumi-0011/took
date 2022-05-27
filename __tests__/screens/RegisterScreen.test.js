import 'react-native';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RegisterScreen from '@screens/Auth/RegisterScreen';
import {fireEvent, render} from '@testing-library/react-native';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

function getComponent(props) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <RegisterScreen {...props} />
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

  test('password check input이 존재', () => {
    const {getByPlaceholderText} = render(component);
    const input = getByPlaceholderText('비밀번호를 다시 입력해주세요');
    expect(input).toBeTruthy();
  });

  test('nickname input이 존재', () => {
    const {getByPlaceholderText} = render(component);
    const input = getByPlaceholderText('닉네임을 입력해주세요');
    expect(input).toBeTruthy();
  });

  test('회원가입 버튼이 존재', () => {
    const {getByText} = render(component);
    const input = getByText('회원가입');
    expect(input).toBeTruthy();
  });
});

describe('Register validation ...', () => {
  const props = {
    navigation: {
      replace: jest.fn(),
    },
  };

  const component = getComponent(props);

  test('이메일이 유효하지 않을 때', async () => {
    const {getByPlaceholderText, getByText, findByText} = render(component);
    const emailInput = getByPlaceholderText('이메일을 입력해주세요');

    fireEvent.changeText(emailInput, 'qudals7613');

    const button = getByText('회원가입');
    fireEvent.press(button);

    const error = await findByText('이메일 형식이 올바르지 않습니다!');
    expect(error).toBeTruthy();
  });

  test('비밀번호가 유효하지 않을 때', async () => {
    const {getByPlaceholderText, getByText, findByText} = render(component);

    const passwordInput = getByPlaceholderText('비밀번호를 입력해주세요');
    fireEvent.changeText(passwordInput, '1234');

    const button = getByText('회원가입');
    fireEvent.press(button);

    const error = await findByText('비밀번호를 다시 확인해주세요');
    expect(error).toBeTruthy();
  });

  test('비밀번호 체크가 틀렸을 때', async () => {
    const {getByPlaceholderText, getByText, findByText} = render(component);
    const passwordInput = getByPlaceholderText('비밀번호를 입력해주세요');
    const checkPasswordInput =
      getByPlaceholderText('비밀번호를 다시 입력해주세요');

    fireEvent.changeText(passwordInput, '12341234');
    fireEvent.changeText(checkPasswordInput, '00000000');

    const button = getByText('회원가입');
    fireEvent.press(button);

    const error = await findByText('비밀번호가 일치하지 않습니다');
    expect(error).toBeTruthy();
  });

  test('닉네임이 유효하지 않을 때', async () => {
    const {getByPlaceholderText, getByText, findByText} = render(component);

    const nameInput = getByPlaceholderText('닉네임을 입력해주세요');
    fireEvent.changeText(nameInput, '');

    const button = getByText('회원가입');
    fireEvent.press(button);

    const error = await findByText('닉네임을 다시 확인해주세요');
    expect(error).toBeTruthy();
  });
});
