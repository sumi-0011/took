import MapView, {Marker} from 'react-native-maps';
import {Box, Button, ChevronLeftIcon, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import Geolocation from 'react-native-geolocation-service';
import {Platform, PermissionsAndroid} from 'react-native';
import MapModal from '@components/MapModal';
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

const MapScreen = ({navigation}: any) => {
  return (
    <Wrapper>
      <BackBtn
        borderRadius="full"
        onPress={() => {
          navigation.pop();
        }}>
        <ChevronLeftIcon />
      </BackBtn>
      <MapContainer />

      <MapModal />
    </Wrapper>
  );
};
function MapContainer() {
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
