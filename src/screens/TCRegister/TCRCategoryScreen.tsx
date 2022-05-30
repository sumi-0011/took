/* eslint-disable @typescript-eslint/no-unused-vars */
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Box, Button, Input, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import BasicButton from '@components/Button';
import Geolocation from 'react-native-geolocation-service';
import CategotyCheckbox from '@components/CategoryCheckbox';
import {categoryList} from '@common/utils/categoryList';
import {requestPermission} from '@common/utils/permission';
import {TCRegistSelect} from '@components/test';
import {useRecoilState} from 'recoil'; // 훅 import
import {string} from 'yup';

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

  const [registData, setRegistData] = useRecoilState(TCRegistSelect);

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
      <Box style={{flex: 1}}>
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
      </Box>
      <Box p={5} bg={'#fff'}>
        <Text>쓰레기통 이름</Text>
        <Input
          size="lg"
          placeholder="쓰레기통 이름을 입력해주세요"
          name="trashName"
          marginY={2}
          value={inputName}
          onChangeText={text => setInputName(text)}
        />
        <CategotyCheckbox
          // groupValue={groupValue}
          setGroupValue={setGroupValue}
        />
        <Button
          onPress={() => {
            // setState
            const tcrRegistData: {name: string; checkList: Array<any>} = {
              name: inputName,
              checkList: groupValue,
            };
            setRegistData({...registData, ...tcrRegistData});
            console.log(registData);
            navigation.navigate('CameraScreen', {
              name: inputName,
              checkList: groupValue,
            });
          }}>
          Camera
        </Button>
      </Box>
    </Box>
  );
}

export default RegistrationCategory;
