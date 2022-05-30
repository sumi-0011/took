import React, {useState} from 'react';
import Camera from '@components/Camera';
import {TCRegistSelect} from '@components/test';
import {useRecoilState} from 'recoil'; // 훅 import

interface IRegistraionInput {
  checkList: Array<string>;
  name: string;
}

function CameraPage({route, navigation}: any) {
  const {name, checkList} = route.params as IRegistraionInput;
  const [imageURL, setImageURL] = useState<string>('');
  const [registData, setRegistData] = useRecoilState(TCRegistSelect);

  console.log('camera page', registData);
  const nextPage = (image: string) => {
    navigation.navigate('TCRInfoScreen', {
      imageUrl: image,
      name: name,
      checkList: checkList,
    });
  };

  return (
    <Camera imageURL={imageURL} setImageURL={setImageURL} nextPage={nextPage} />
  );
}

export default CameraPage;
