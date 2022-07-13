import React, {ReactNode} from 'react';
import {ImageBackground, View} from 'react-native';
import styled from 'styled-components/native';

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
      <Bg />
      {children}
    </ImageBackground>
  );
}

const ImageBackgroundStyles = {
  width: '100%',
  height: '100%',
};

const Bg = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default BackgroundImage;
