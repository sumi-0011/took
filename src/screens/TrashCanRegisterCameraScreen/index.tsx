import React from 'react';
import Camera from './Camera';
import {useRecoilState} from 'recoil';
import {TCRegistSelectState} from '@recoil/TCRegistState';

function TrashCanRegisterCameraScreen({navigation}: any) {
  const [registData, setRegistData] = useRecoilState(TCRegistSelectState);
  const nextPage = (image: string) => {
    setRegistData({...registData, trashImage: image});
    navigation.navigate('TCRInfoScreen');
  };

  return <Camera nextPage={nextPage} />;
}

export default TrashCanRegisterCameraScreen;
