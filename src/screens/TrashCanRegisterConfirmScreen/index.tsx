import React, {useEffect, useState} from 'react';
import {Box} from 'native-base';
import {useRecoilValue} from 'recoil';
import {trashCanRegisterState} from '@recoil/TrashCanRegisterState';
import {addTrashCan} from '@api/trashCanAPI';
import {getUser, updateRegisterTrashCan} from '@api/userAPI';
import TookButton from '@components/TookButton';
import {TrashCanInfoType} from 'types/TrashCanType';
import TCRInfoPlaceInfo from '@screens/TrashCanRegisterConfirmScreen/TCRInfoPlaceInfo';
import TCRInfo from '@screens/TrashCanRegisterConfirmScreen/TCRInfo';

function TrachCanRegisterConfirmScreen({navigation}: any) {
  const currentTrashCan = useRecoilValue<TrashCanInfoType>(
    trashCanRegisterState,
  );

  const [registerTrashCans, setRegisterTrashCans] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const user = await getUser();
      setRegisterTrashCans(user.registedTrashCans);
    }

    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      const trashCan = await addTrashCan(currentTrashCan);

      if (trashCan) {
        await updateRegisterTrashCan([...registerTrashCans, trashCan.id]);
      }
    } catch (error) {
      console.log(error);
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
