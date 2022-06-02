import 'react-native';
import React from 'react';
import App from '../App';

import {render} from '@testing-library/react-native';
import {NativeBaseProvider} from 'native-base';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

function getComponent(props) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <App {...props} />
    </NativeBaseProvider>
  );
}

describe('App test...', () => {
  const props = {};
  const component = getComponent(props);
  test('App test', () => {
    const rendering = render(component);
    expect(rendering).toMatchSnapshot();
    expect(rendering).toBeTruthy();
  });
});
