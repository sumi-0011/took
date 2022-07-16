import React from 'react';
import {Box} from 'native-base';
import {useRecoilValue} from 'recoil';
import {trashCanRegisterState} from '@recoil/TrashCanRegisterState';
import {addTrashCan} from '@api/trashCanAPI';
import TOOKBtn from '@components/TookButton';
import {TrashCanInfoType} from 'types/TrashCanType';
import TCRInfoPlaceInfo from './TCRInfoPlaceInfo';
import TCRInfo from './TCRInfo';

function TrachCanRegisterConfirmScreen({navigation}: any) {
  const registerData = useRecoilValue<TrashCanInfoType>(trashCanRegisterState);

  const handleSubmit = async () => {
    const res = await addTrashCan(registerData);
    console.log(res);
    navigation.navigate('HomeScreen');
  };

  return (
    <Box p={5} bg="white" height="100%" justifyContent="space-between">
      <TCRInfoPlaceInfo
        name={registerData.name}
        coordinate={registerData.coordinate}
        address={`${registerData.coordinate.latitude} + ${registerData.coordinate.longitude}`}
      />
      <TCRInfo image={registerData.trashImage} tagList={registerData.tags} />
      <TOOKBtn name={'등록하기'} onPress={handleSubmit} />
    </Box>
  );
}

export default TrachCanRegisterConfirmScreen;
