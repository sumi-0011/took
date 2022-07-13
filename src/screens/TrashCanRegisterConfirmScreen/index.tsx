import React from 'react';
import {Box} from 'native-base';
import {useRecoilValue} from 'recoil';
import {TCRegistSelectState} from '@recoil/TCRegistState';
import {addTrashCan} from '@api/trashCanAPI';
import TOOKBtn from '@components/TOOKBtn';
import {TrashCanInfoType} from 'types/TrashCanType';
import TCRInfoPlaceInfo from './TCRInfoPlaceInfo';
import TCRInfo from './TCRInfo';

function TrachCanRegisterConfirmScreen({navigation}: any) {
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
        // NOTE :  address 임시 데이터
        address={`${info.coordinate.latitude} + ${info.coordinate.longitude}`}
      />
      <TCRInfo image={info.trashImage} tagList={info.tags} />
      <TOOKBtn name={'등록하기'} onPress={handleSubmit} />
    </Box>
  );
}

export default TrachCanRegisterConfirmScreen;
