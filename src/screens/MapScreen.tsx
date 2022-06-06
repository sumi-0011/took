import MapView, {Marker} from 'react-native-maps';
import {Box, Button, ChevronLeftIcon, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import Geolocation from 'react-native-geolocation-service';
import MapModal from '@components/MapModal';
import {requestAccessLocationPermission} from '@common/utils/permission';
import {getUserInfo} from '@common/api/fireAuth';
import {getUser} from '@common/api/user';
import {IUserInfo} from 'types/User';
import {useRecoilState} from 'recoil';
import {user} from '../recoil/user';
import {getTrashCans} from '@common/api/trashCan';
import {ITrashCan} from 'types/TrashCan';
import {TrashCan} from 'recoil/trahCan';

const MapScreen = ({navigation}: any) => {
  const {uid} = getUserInfo();
  const [userInfo, setUserInfo] = useRecoilState<IUserInfo>(user);
  const [selectTC, setSelectTC] = useState<string>();

  useEffect(() => {
    uid &&
      getUser(uid).then(res => {
        res && setUserInfo(res);
      });
  }, [setUserInfo, uid]);

  return (
    <Wrapper>
      <BackBtn
        borderRadius="full"
        onPress={() => {
          navigation.pop();
        }}>
        <ChevronLeftIcon />
      </BackBtn>
      <MapContainer setSelectTC={setSelectTC} />
      {selectTC && <MapModal currentTCId={selectTC} />}
    </Wrapper>
  );
};
function MapContainer({setSelectTC}: {setSelectTC: (arg: string) => void}) {
  const [location, setLocation] = useState<any | undefined>(undefined);
  const [trashCanList, setTrashCanList] = useState<Array<any>>();
  // useEffect(() => {
  //   console.log('trashCanList', trashCanList);
  // }, [trashCanList]);

  useEffect(() => {
    getTrashCans().then(res => {
      res && setTrashCanList(res);
    });
  }, []);

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

  const handleMarkerClick = (id: string) => {
    // console.log('click id', id);
    setSelectTC(id);
  };

  return (
    <View style={{flex: 1}}>
      {location && trashCanList && (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}>
          <Marker coordinate={location} />
          {trashCanList &&
            trashCanList.map((item, index) => {
              return (
                <Marker
                  key={index}
                  title={item.name}
                  identifier={item.id}
                  coordinate={item.coordinate}
                  image={require('../images/trashCan.png')}
                  onPress={() => handleMarkerClick(item.id)}
                />
              );
            })}
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
