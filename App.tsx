import React from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from '@navigations/MainNavigation';
import {RecoilRoot} from 'recoil';

function App() {
  const theme = extendTheme({
    components: {
      Button: {
        variants: {
          light: ({colorScheme}: any) => {
            return {
              bg: `${colorScheme}.500`,
              _pressed: {bg: `${colorScheme}.600`},
            };
          },
        },
      },
    },
  });

  return (
    <RecoilRoot>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </RecoilRoot>
  );
}

export default App;
