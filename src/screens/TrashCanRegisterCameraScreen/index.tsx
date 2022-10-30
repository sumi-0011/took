import React, {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {trashCanRegisterState} from '@recoil/TrashCanRegisterState';
import Camera from './Camera';
import {TrashCanInfoType} from 'types/TrashCanType';

function TrashCanRegisterCameraScreen({navigation}: any) {
  const [registerData, setRegisterData] = useRecoilState<TrashCanInfoType>(
    trashCanRegisterState,
  );

  const moveToNextPage = useCallback(
    (image: string) => {
      setRegisterData({...registerData, trashImage: image});
      navigation.navigate('TrachCanRegisterConfirmScreen');
    },
    [navigation, registerData, setRegisterData],
  );

  return <Camera moveToNextPage={moveToNextPage} />;
}

export default TrashCanRegisterCameraScreen;
