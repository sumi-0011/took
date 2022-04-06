import React, { ReactNode } from 'react';
import {ImageBackground, ImageSourcePropType, View} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  image: ImageSourcePropType;
  children?: ReactNode;
};
const ImageBgBox = ({image, children}: Props) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={{
      width: '100%',
      height: '100%',
    }}>
    <Bg />
    {children}
    {/* <View style={boxStyle}>{children}</View> */}
  </ImageBackground>
  )
}
const Bg = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color:rgba(0, 0, 0, 0.2);

`;
export default ImageBgBox;