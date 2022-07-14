import React from 'react';
import {useRecoilState} from 'recoil';
import {TCRegistSelectState} from '@recoil/TCRegistState';
import Camera from './Camera';

function TrashCanRegisterCameraScreen({navigation}: any) {
  const [registData, setRegistData] = useRecoilState(TCRegistSelectState);
  const nextPage = (image: string) => {
    setRegistData({...registData, trashImage: image});
    navigation.navigate('TrachCanRegisterConfirmScreen');
  };

  return <Camera nextPage={nextPage} />;
}

export default TrashCanRegisterCameraScreen;
