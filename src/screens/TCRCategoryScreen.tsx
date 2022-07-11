import MapView, {Marker} from 'react-native-maps';
import {Box, Button, Input, Text} from 'native-base';
import React, {useState} from 'react';
import CategotyCheckbox from '@components/CategoryCheckbox';
import {useRecoilState} from 'recoil';
import {TrashCanInfoType} from 'types/TrashCanType';
import useCurrentLocation from '@hooks/useCurrentLocation';
import {TCRegistSelectState} from '@recoil/TCRegistState';

function TCRCategoryScreen({navigation}: any) {
  const {location, setLocation} = useCurrentLocation();
  const [inputName, setInputName] = useState<string>('');
  const [groupValue, setGroupValue] = useState<string[]>([]);
  const [registData, setRegistData] =
    useRecoilState<TrashCanInfoType>(TCRegistSelectState);

  const handleCameraBtnClick = () => {
    if (!location) {
      return;
    }
    const tcrRegistData: {
      name: string;
      tags: string[];
      coordinate: {latitude: number; longitude: number};
    } = {
      name: inputName,
      tags: groupValue,
      coordinate: location,
    };
    setRegistData({...registData, ...tcrRegistData});
    navigation.navigate('CameraScreen');
  };

  return (
    <Box height={'100%'}>
      <Box flex={1}>
        {location && (
          <MapView
            style={mapViewStyle}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
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
        <CategotyCheckbox setGroupValue={setGroupValue} />
        <Button onPress={handleCameraBtnClick} bgColor="#68de7b">
          사진 촬영
        </Button>
      </Box>
    </Box>
  );
}

const mapViewStyle = {flex: 1};

export default TCRCategoryScreen;
