import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {NativeBaseProvider} from 'native-base';
import ErrorMsg from '@components/ErrorMsg';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

function getComponent(props) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <ErrorMsg {...props}>error</ErrorMsg>
    </NativeBaseProvider>
  );
}

describe('Error msg rendering...', () => {
  const props = {};
  const component = getComponent(props);

  test('error 텍스트 존재', () => {
    const {getByText} = render(component);

    expect(getByText('error')).toBeTruthy();
  });
});
