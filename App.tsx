import React from 'react';
import {RecoilRoot} from 'recoil';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from '~/navigations/MainNavigation';

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
