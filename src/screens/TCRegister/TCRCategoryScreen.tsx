/* eslint-disable @typescript-eslint/no-unused-vars */
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Box, Button, Input, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import BasicButton from '@components/Button';
import Geolocation from 'react-native-geolocation-service';
import CategotyCheckbox from '@components/CategoryCheckbox';
import {categoryList} from '@common/utils/categoryList';
import {requestPermission} from '@common/utils/permission';

interface ILocation {
  latitude: number;
  longitude: number;
}

export interface ICategory {
  name: string;
  key: string;
}

interface IRegistraionInput {
  checks: Array<string>;
  name: string;
}

function RegistrationCategory({navigation}: any) {
  const [inputName, setInputName] = useState('');
  const [groupValue, setGroupValue] = useState([]);
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
    <Box height={'100%'}>
      <View style={{flex: 1}}>
        {location && (
          <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            }}
            onRegionChange={region => {
              setLocation({
                latitude: region.latitude,
                longitude: region.longitude,
              });
            }}
            onRegionChangeComplete={region => {
              setLocation({
                latitude: region.latitude,
                longitude: region.longitude,
              });
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
        <Text>쓰레기통 이름</Text>
        <Input
          size="lg"
          placeholder="lg Input"
          marginY={2}
          value={inputName}
          onChangeText={text => setInputName(text)}
        />
        <CategotyCheckbox
          groupValue={groupValue}
          setGroupValue={setGroupValue}
        />
        <Button
          onPress={() => {
            navigation.navigate('CameraScreen', {
              name: inputName,
              checkList: groupValue,
            });
          }}>
          Camera
        </Button>
        {/* 
          <BasicButton
            onPress={() => {
              navigation.navigate('RegistrationInfo', {
                name: inputName,
                checkList: groupValue,
              });
            }}>
            사진 촬영
          </BasicButton> */}
      </Box>
    </Box>
  );
}

export default RegistrationCategory;
