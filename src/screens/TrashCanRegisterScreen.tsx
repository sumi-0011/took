import {Box, Button, Input, Text} from 'native-base';
import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {TCRStep1RegistType, TrashCanInfoType} from 'types/TrashCanType';
import {TCRegistSelectState} from '@recoil/TCRegistState';
import useCurrentLocation from '@hooks/useCurrentLocation';
import CategotyCheckbox from '@components/CategoryCheckbox';
import MapViewWrapper from '@components/MapView';
import TOOKBtn from '@components/TOOKBtn';

function TrashCanRegisterScreen({navigation}: any) {
  const {location, setLocation} = useCurrentLocation();
  const [inputName, setInputName] = useState<string>('');
  const [groupValue, setGroupValue] = useState<string[]>([]);
  const [registData, setRegistData] =
    useRecoilState<TrashCanInfoType>(TCRegistSelectState);

  const handleCameraBtnClick = () => {
    if (!location) {
      return;
    }
    const tcrRegistStep1Data: TCRStep1RegistType = {
      name: inputName,
      tags: groupValue,
      coordinate: location,
    };
    setRegistData({...registData, ...tcrRegistStep1Data});
    navigation.navigate('TrashCanRegisterCameraScreen');
  };

  return (
    <Box height={'100%'}>
      <Box flex={1}>
        {location && (
          <MapViewWrapper location={location} setLocation={setLocation} />
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
          handleCheckChange={(values: string[]) => setGroupValue(values || [])}
        />
        <TOOKBtn name={' 사진 촬영'} onPress={handleCameraBtnClick} />
      </Box>
    </Box>
  );
}

export default TrashCanRegisterScreen;
