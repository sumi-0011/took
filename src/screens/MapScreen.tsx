import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  AddIcon,
  Box,
  Button,
  Center,
  ChevronLeftIcon,
  Fab,
  HStack,
  Icon,
  Image,
  NativeBaseProvider,
  Pressable,
  SunIcon,
  Text,
  View,
  WarningTwoIcon,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import BadgeList from '~/components/BadgeList';
// import {AntDesign} from '@expo/vector-icons';
import {AntDesign} from '@native-base/icons';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import Geolocation from 'react-native-geolocation-service';
import {Platform, PermissionsAndroid} from 'react-native';
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
      <Wrapper>
        <BackBtn
          borderRadius="full"
          onPress={() => {
            navigation.pop();
          }}>
          <ChevronLeftIcon />
          {/* <Icon
            as={AntDesign}
            name="left-outlined"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
          /> */}
        </BackBtn>
        <>
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
        </>
        {/*<Modal borderTopRadius="20" p={5}>
          <Detail paddingY={2} borderBottomWidth="1" borderColor="coolGray.200">
            <DetailText
              name="공대 5호관 1층"
              address="대전광역시 유성구 대학로 99(궁동)"
              badgeList={['플라스틱', '유리병']}
            />
            <DetailImage url={'https://wallpaperaccess.com/full/317501.jpg'} />
          </Detail>
          <HStack paddingY={3}>
            <IconButton p={3}>
              <SunIcon size="4" />
              <IconText>MY TOOK</IconText>
            </IconButton>
            <IconButton p={3}>
              <WarningTwoIcon size="4" />
              <IconText>신고하기</IconText>
            </IconButton>
          </HStack>
          <TookButton>
            <Pressable onPress={() => console.log('버리기 버튼 클릭')}>
              <Text color={'#fff'} fontSize="lg" bold>
                TOOK 버리기
              </Text>
            </Pressable>
          </TookButton>
                </Modal>*/}
      </Wrapper>
    </NativeBaseProvider>
  );
};
const DetailText = ({
  name,
  address,
  badgeList,
}: {
  name: string;
  address: string;
  badgeList: Array<string>;
}) => {
  return (
    <Box flex={1}>
      <Text fontSize="lg" bold>
        {name}
      </Text>
      <Text fontSize="sm" color={'coolGray.500'}>
        {address}
      </Text>
      <Box>
        <BadgeList data={badgeList} />
      </Box>
    </Box>
  );
};
const DetailImage = ({url}: {url: string}) => {
  return (
    <Box w={100} h={'100%'}>
      <Image
        source={{
          uri: url,
        }}
        alt="detail img"
        width={100}
        height={90}
        borderRadius={10}
      />
    </Box>
  );
};
const BackBtn = styled(Button)`
  width: 50px;
  height: 50px;
  background-color: #fff;
  margin: 10px;
`;
const IconText = styled(Text)`
  color: #767676;
  margin-left: 10px;
`;
const TookButton = styled(Center)`
  background-color: #68de7b;
  padding: 10px;
  border-radius: 10px;
`;
const IconButton = styled(Pressable)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: #767676;
`;
const Detail = styled(Box)`
  flex-direction: row;
`;

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
`;
const Modal = styled(Box)`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #fff;
`;
export default MapScreen;
