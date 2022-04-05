import React from 'react';
import {Image} from 'react-native';

type Props = {
  img: string;
};

const Profile = ({img}: Props) => {
  return <Image source={{uri: img}} style={{width: 50, height: 50}} />;
};

export default Profile;
