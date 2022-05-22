import AsyncStorage from '@react-native-async-storage/async-storage';
import {Center} from 'native-base';
import React, {useEffect} from 'react';

function SplashScreen() {
  useEffect(() => {
    AsyncStorage.getItem('user').then(value => {
      console.log(value);
      if (value != null) {
        props.goMain(value);

        props.navigation.replace('Main');
      } else {
        props.navigation.replace('Auth');
        console.log(value);
      }
    });
  }, []);

  return <Center>splash</Center>;
}

export default SplashScreen;
