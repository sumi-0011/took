import {NativeBaseProvider, Text} from 'native-base';
import React from 'react';
import Camera from '~/components/Camera';

type Props = {};

function TestScreen({}: Props) {
  return (
    <NativeBaseProvider>
      <Text>테스트 화면</Text>
      <Camera />
    </NativeBaseProvider>
  );
}

export default TestScreen;
