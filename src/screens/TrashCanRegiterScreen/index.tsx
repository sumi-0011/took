import React, {useState} from 'react';
import {Box, Input, Text, useToast, VStack} from 'native-base';
import {useRecoilState} from 'recoil';
import {TrashCanInfoType} from 'types/TrashCanType';
import {trashCanRegisterState} from '@recoil/TrashCanRegisterState';
import useCurrentLocation from '@hooks/useCurrentLocation';
import RecycleChecks from '@screens/TrashCanRegiterScreen/RecycleChecks';
import MapViewWrapper from '@components/MapViewWrapper';
import TookButton from '@components/TookButton';
import CenterSpinner from '@components/CenterSpinner';
import {LocationType} from 'types/LocationType';
import {Marker} from 'react-native-maps';

function TrashCanRegisterScreen({navigation}: any) {
  const toast = useToast();
  const {location, setLocation} = useCurrentLocation();

  const [inputName, setInputName] = useState<string>('');
  const [groupValue, setGroupValue] = useState<string[]>([]);

  const [registerData, setRegisterData] = useRecoilState<TrashCanInfoType>(
    trashCanRegisterState,
  );

  const handleCameraButtonClick = () => {
    if (!inputName || groupValue.length === 0) {
      toast.show({
        render: () => {
          return (
            <Box bg="error.500" px="3" py="2" rounded="full" mb={5}>
              <Text color="white" bold fontSize="md">
                쓰레기통의 이름과 카테고리를 한 개 이상 선택해주세요.
              </Text>
            </Box>
          );
        },
      });
    } else if (location) {
      setRegisterData({
        ...registerData,
        name: inputName,
        tags: groupValue,
        coordinate: location,
      });

      navigation.navigate('TrashCanRegisterCameraScreen');
    }
  };

  const handleRegionChange = (region: LocationType) => {
    setLocation({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  };

  const handleCheckChange = (values: string[]) => {
    setGroupValue(values);
  };

  const handleTextChange = (text: string) => {
    setInputName(text);
  };

  if (!location) {
    return <CenterSpinner />;
  }

  return (
    <Box h="100%" bg="white">
      {location ? (
        <MapViewWrapper
          location={location}
          handleRegionChange={handleRegionChange}>
          <Marker coordinate={location} />
        </MapViewWrapper>
      ) : null}

      <VStack space={10} p={5}>
        <VStack space={2}>
          <Text fontSize="xl">쓰레기통 이름</Text>
          <Input
            size="lg"
            placeholder="쓰레기통 이름을 입력해주세요"
            name="trashName"
            marginY={1}
            value={inputName}
            onChangeText={handleTextChange}
          />
        </VStack>
        <RecycleChecks handleCheckChange={handleCheckChange} />
        <TookButton name="사진 촬영" onPress={handleCameraButtonClick} />
      </VStack>
    </Box>
  );
}

export default TrashCanRegisterScreen;
