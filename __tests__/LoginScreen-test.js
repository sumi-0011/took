import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LoginScreen from '@screens/Auth/LoginScreen';
import signInWithEmailAndPassword from '../__mocks__/@react-native-firebase/auth';
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

describe('App test...', () => {
  const props = {};
  const component = getComponent(props);
  test('test 2', () => {
    const rendering = render(component);
    expect(rendering).toMatchSnapshot();
    expect(rendering).toBeTruthy();
  });

  //   test('로그인에 성공하면 상태 코드 200을 반환받음', () => {
  //     const rendered = render(<LoginScreen {...props} />);

  //     fireEvent(rendered.getByText('로그인'), 'onPress');

  //     signInWithEmailAndPassword.mockImplementation(
  //       ({email, password}) => `${email}, ${password}`,
  //     );

  //     expect(signInWithEmailAndPassword).toBeCalledTimes(1);
  //     signInWithEmailAndPassword.mockReturnValue(
  //       Promise.resolve({
  //         statusCode: 200,
  //       }),
  //     );
  //   });
});
