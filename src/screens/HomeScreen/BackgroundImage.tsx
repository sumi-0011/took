import {Box} from 'native-base';
import React, {ReactNode} from 'react';
import {ImageBackground} from 'react-native';

interface IBackgroundImage {
  children: ReactNode;
  img: string;
}

function BackgroundImage({children, img}: IBackgroundImage) {
  return (
    <ImageBackground
      source={{
        uri: img,
      }}
      resizeMode="cover"
      style={ImageBackgroundStyles}>
      <Box
        w="100%"
        h="100%"
        position={'absolute'}
        bgColor="rgba(0, 0, 0, 0.4)"
      />
      {children}
    </ImageBackground>
  );
}

const ImageBackgroundStyles = {
  width: '100%',
  height: '100%',
};

export default BackgroundImage;
