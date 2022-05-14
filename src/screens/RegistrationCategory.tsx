/* eslint-disable @typescript-eslint/no-unused-vars */
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  Box,
  Input,
  NativeBaseProvider,
  Text,
  Stack,
  FlatList,
  Checkbox,
  View,
  FormControl,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import BasicButton from '~/components/BasicButton';
import Geolocation from 'react-native-geolocation-service';
import {Platform, PermissionsAndroid} from 'react-native';

type Props = {};
const categoryList = [
  {
    name: '일반쓰레기',
    key: 'general-waste',
    check: false,
  },
  {
    name: '플라스틱',
    key: 'plastic',
    check: false,
  },
  {
    name: '종이류',
    key: 'paper',
    check: false,
  },
  {
    name: '음식물쓰레기',
    key: 'food-waste',
    check: false,
  },
  {
    name: '잡병',
    key: 'mixed-bottle',
    check: false,
  },
  {
    name: '유리병',
    key: 'glass-bottle',
    check: false,
  },
  {
    name: '스티로폼',
    key: 'styrofoam',
    check: false,
  },
  {
    name: '캔류',
    key: 'can',
    check: false,
  },
  {
    name: '헌옷수거함',
    key: 'old-clothes-locker',
    check: false,
  },
  {
    name: '고철',
    key: 'iron',
    check: false,
  },
  {
    name: '건전지',
    key: 'battery',
    check: false,
  },
  {
    name: '형광등',
    key: 'lamp',
    check: false,
  },
];
async function requestPermission() {
  try {
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (e) {
    console.log(e);
  }
}
interface ILocation {
  latitude: number;
  longitude: number;
}
const RegistrationCategory = ({navigation}: {navigation: any}) => {
  const [category, setcategory] = useState(categoryList);
  const [location, setLocation] = useState<ILocation | undefined>(undefined);
  useEffect(() => {
    requestPermission().then(result => {
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            const {latitude, longitude} = pos.coords;
            setLocation({latitude, longitude});
          },
          error => {
            console.log(error);
          },
          {enableHighAccuracy: true, timeout: 3600, maximumAge: 3600},
        );
      }
    });
  }, []);
  return (
    <NativeBaseProvider>
      <Box height={'100%'}>
        <View style={{flex: 1}}>
          {location && (
            <MapView
              style={{flex: 1}}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}>
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
              />
            </MapView>
          )}
        </View>
        <Box p={5} bg={'#fff'}>
          {/* <FormControl> */}
          <Input size="lg" placeholder="lg Input" marginY={2} />
          <FlatList
            numColumns={2}
            data={category}
            renderItem={({item}) => (
              <CheckInput name={item.name} checked={item.check} />
            )}
          />
          {/* </FormControl> */}

          <BasicButton
            onPress={() => {
              navigation.navigate('RegistrationInfo');
            }}>
            사진 촬영
          </BasicButton>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};
const CheckInput = ({name, checked}: {name: string; checked: boolean}) => {
  return (
    <Box flex={1} paddingY={2}>
      <Checkbox value={name} defaultIsChecked={checked}>
        {name}
      </Checkbox>
    </Box>
  );
};
export default RegistrationCategory;
