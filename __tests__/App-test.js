import 'react-native';
import React from 'react';
import App from '../App';

import {render} from '@testing-library/react-native';
let props;
let component;

function getComponent(props) {
  return <App {...props} />;
}

describe('App test...', () => {
  props = {};
  component = getComponent(props);
  test('test 1', () => {
    const rendering = render(component);
    expect(rendering).toMatchSnapshot();
    expect(rendering).toBeTruthy();
  });
});
