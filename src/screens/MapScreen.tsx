import MapView, {Marker} from 'react-native-maps';
import {Box, Button, ChevronLeftIcon, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import Geolocation from 'react-native-geolocation-service';
import MapModal from '@components/MapModal';
import firestore from '@react-native-firebase/firestore';
import {requestAccessLocationPermission} from '@common/utils/permission';
import {getUserInfo} from '@common/api/fireAuth';
import {getUser} from '@common/api/user';
import {IUserInfo} from 'types/User';
import {useRecoilState} from 'recoil';
import {user} from '../recoil/user';

const MapScreen = ({navigation}: any) => {
  const {uid} = getUserInfo();
  const [userInfo, setUserInfo] = useRecoilState<IUserInfo>(user);

  useEffect(() => {
    getUser(uid ?? 'LVert06OcdS5LxDPRM37iflYdFu1').then(res => {
      // console.log('ret success', res);
      res && setUserInfo(res);
    });
  }, []);

  return (
    <Wrapper>
      <BackBtn
        borderRadius="full"
        onPress={() => {
          navigation.pop();
        }}>
        <ChevronLeftIcon />
      </BackBtn>
      <Text>{userInfo?.uid}</Text>
      <MapContainer />
      <MapModal />
    </Wrapper>
  );
};
function MapContainer() {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);
  useEffect(() => {
    requestAccessLocationPermission().then(result => {
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
  );
}

const BackBtn = styled(Button)`
  width: 50px;
  height: 50px;
  background-color: #fff;
  margin: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
`;

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
`;

export default MapScreen;
