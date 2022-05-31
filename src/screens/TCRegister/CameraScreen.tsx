import React, {useState} from 'react';
import Camera from '@components/Camera';
import {TCRegistSelect} from '../../recoil/TCRegist';
import {useRecoilState} from 'recoil'; // 훅 import

function CameraPage({navigation}: any) {
  const [imageURL, setImageURL] = useState<string>('');
  const [registData, setRegistData] = useRecoilState(TCRegistSelect);
  console.log('camera page', registData);
  const nextPage = (image: string) => {
    setRegistData({...registData, trashImage: image});
    navigation.navigate('TCRInfoScreen');
  };

  return (
    <Camera imageURL={imageURL} setImageURL={setImageURL} nextPage={nextPage} />
  );
}

export default CameraPage;
