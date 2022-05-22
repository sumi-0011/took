import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import MainNavigation from '~/navigations/MainNavigation';
import {RecoilRoot} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </RecoilRoot>
  );
}

export default App;
