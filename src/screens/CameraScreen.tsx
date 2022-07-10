import React, {useState} from 'react';
import Camera from '@components/Camera';
import {TCRegistSelect} from '../recoil/TCRegist';
import {useRecoilState} from 'recoil';

function CameraScreen({navigation}: any) {
  const [imageURL, setImageURL] = useState<string>('');
  const [registData, setRegistData] = useRecoilState(TCRegistSelect);

  const nextPage = (image: string) => {
    setRegistData({...registData, trashImage: image});
    navigation.navigate('TCRInfoScreen');
  };

  return (
    <Camera imageURL={imageURL} setImageURL={setImageURL} nextPage={nextPage} />
  );
}

export default CameraScreen;
