import 'react-native';
import React from 'react';
import App from '../App';

import {render} from '@testing-library/react-native';

let props;
let component;

function getComponent(props) {
  return <App {...props} />;
}

jest.mock('react-native-maps', () => 'MapView');
jest.mock('react-native-geolocation-service', () => 'geo');
jest.mock('react-native-camera', () => 'mockCamera');
jest.mock('@react-native-community/cameraroll', () => 'cameraroll');
// jest.mock('@react-native-firebase/auth', () => 'firebase');

describe('App test...', () => {
  props = {};
  component = getComponent(props);
  test('test 1', () => {
    const rendering = render(component);
    expect(rendering).toMatchSnapshot();
    expect(rendering).toBeTruthy();
  });
});
