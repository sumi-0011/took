import React from 'react';
import {Box, useToast} from 'native-base';
import {useRecoilValue} from 'recoil';
import {trashCanRegisterState} from '@recoil/TrashCanRegisterState';
import {addTrashCan} from '@api/trashCanAPI';
import {addRegisterTrashCan} from '@api/userAPI';
import TookButton from '@components/TookButton';
import {TrashCanInfoType} from 'types/TrashCanType';
import TCRInfoPlaceInfo from '@screens/TrashCanRegisterConfirmScreen/TCRInfoPlaceInfo';
import TCRInfo from '@screens/TrashCanRegisterConfirmScreen/TCRInfo';

function TrachCanRegisterConfirmScreen({navigation}: any) {
  const toast = useToast();
  const currentTrashCan = useRecoilValue<TrashCanInfoType>(
    trashCanRegisterState,
  );

  const handleSubmit = async () => {
    try {
      const trashCan = await addTrashCan(currentTrashCan);

      if (trashCan) {
        await addRegisterTrashCan(trashCan.id);
      }

      toast.show({
        description: '쓰레기통 등록이 완료되었습니다',
      });
    } catch (error) {
      console.error(error);
    }

    navigation.navigate('HomeScreen');
  };

  return (
    <Box p={5} bg="white" height="100%" justifyContent="space-between">
      <TCRInfoPlaceInfo
        name={currentTrashCan.name}
        coordinate={currentTrashCan.coordinate}
        address={`${currentTrashCan.coordinate.latitude} + ${currentTrashCan.coordinate.longitude}`}
      />
      <TCRInfo
        image={currentTrashCan.trashImage}
        tagList={currentTrashCan.tags}
      />
      <TookButton name={'등록하기'} onPress={handleSubmit} />
    </Box>
  );
}

export default TrachCanRegisterConfirmScreen;
