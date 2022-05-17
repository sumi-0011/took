import {NativeBaseProvider, Text} from 'native-base';
import React from 'react';

function UserScreen() {
  return (
    <NativeBaseProvider>
      <Text>UserScreen</Text>
    </NativeBaseProvider>
  );
}

export default UserScreen;
