import React from 'react';
import {Box, Button} from 'native-base';
import {useRecoilValue} from 'recoil';
import {TCRegistSelectState} from '@recoil/TCRegistState';
import {TrashCanInfoType} from 'types/TrashCanType';
import {addTrashCan} from '@api/trashCanAPI';
import TCRInfoPlaceInfo from './TCRInfoPlaceInfo';
import TCRInfo from './TCRInfo';

function TCRInfoScreen({navigation}: any) {
  const info = useRecoilValue<TrashCanInfoType>(TCRegistSelectState);

  const handleSubmit = async () => {
    const res = await addTrashCan(info);

    console.log(res);
    navigation.navigate('HomeScreen');
  };

  return (
    <Box p={5} bg={'#fff'} height={'100%'} justifyContent="space-between">
      <TCRInfoPlaceInfo
        name={info.name}
        coordinate={info.coordinate}
        address={`${info.coordinate.latitude} + ${info.coordinate.longitude}`}
      />
      <TCRInfo image={info.trashImage} tagList={info.tags} />
      <Button onPress={handleSubmit}>등록하기</Button>
    </Box>
  );
}

export default TCRInfoScreen;
