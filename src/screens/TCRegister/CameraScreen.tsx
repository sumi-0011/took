import React, {useState} from 'react';
import Camera from '@components/Camera';

interface IRegistraionInput {
  checkList: Array<string>;
  name: string;
}

function CameraPage({route, navigation}: any) {
  const {name, checkList} = route.params as IRegistraionInput;
  const [imageURL, setImageURL] = useState<string>('');

  const nextPage = (image: string) => {
    navigation.navigate('RegistrationInfo', {
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
