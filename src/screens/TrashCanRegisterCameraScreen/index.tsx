import React from 'react';
import {useRecoilState} from 'recoil';
import {trashCanRegisterState} from '@recoil/TrashCanRegisterState';
import Camera from './Camera';
import {TrashCanInfoType} from 'types/TrashCanType';

function TrashCanRegisterCameraScreen({navigation}: any) {
  const [registerData, setRegisterData] = useRecoilState<TrashCanInfoType>(
    trashCanRegisterState,
  );

  const nextPage = (image: string) => {
    setRegisterData({...registerData, trashImage: image});
    navigation.navigate('TrachCanRegisterConfirmScreen');
  };

  return <Camera nextPage={nextPage} />;
}

export default TrashCanRegisterCameraScreen;
