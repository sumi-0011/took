import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import MainNavigation from '~/navigations/MainNavigation';

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
