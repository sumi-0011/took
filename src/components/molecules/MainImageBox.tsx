import React, { ReactNode } from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import MainBox from '../atoms/MainBox';

type Props = {
  image: any;
  mainText?: string;
  subText?: string;
  children?: ReactNode;
  boxStyle?: any;
};

const MainImageBox = ({image, boxStyle, children}: Props) => {
  return (
    <MainBox>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.bg} />
        <View style={boxStyle}>{children}</View>
      </ImageBackground>
    </MainBox>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  bg: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
export default MainImageBox;
