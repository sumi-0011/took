import 'react-native';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import MapScreen from '@screens/MapScreen';
import {render, fireEvent} from '@testing-library/react-native';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

function getComponent(props) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <MapScreen {...props} />
    </NativeBaseProvider>
  );
}

const getPositionMockFn = jest.fn();

getPositionMockFn.mockResolvedValue({
  latitude: 34.123123,
  longitude: -122.462532,
});

test('제대로된 좌표값을 받아왔는가?', () => {
  getPositionMockFn().then(res =>
    expect(res).toStrictEqual({latitude: 34.123123, longitude: -122.462532}),
  );
});
