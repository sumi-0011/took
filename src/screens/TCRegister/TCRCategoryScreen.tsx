/* eslint-disable @typescript-eslint/no-unused-vars */
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Box, Button, Input, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import CategotyCheckbox from '@components/CategoryCheckbox';
import {requestPermission} from '@common/utils/permission';
import {TCRegistSelect} from '../../recoil/TCRegist';
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

function RegistrationCategory({navigation}: any) {
  const [inputName, setInputName] = useState('');
  const [groupValue, setGroupValue] = useState([]);
  const [location, setLocation] = useState<ILocation | undefined>(undefined);

  const [registData, setRegistData] = useRecoilState(TCRegistSelect);

  const [isSubmit, setIsSubmit] = useState<boolean>(false);
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
  const handleCameraBtnClick = () => {
    const tcrRegistData: {name: string; tags: Array<string>} = {
      name: inputName,
      tags: groupValue,
    };
    setRegistData({...registData, ...tcrRegistData});
    navigation.navigate('CameraScreen');
  };
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
        <Input
          accessibilityLabel="쓰레기통 위치"
          onChange={() => setIsSubmit(true)}>
          대전광역시 동구 중앙로 211(장동)
        </Input>
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
        <CategotyCheckbox setGroupValue={setGroupValue} />
        <Button onPress={handleCameraBtnClick}>사진 촬영</Button>
      </Box>
    </Box>
  );
}

export default RegistrationCategory;
