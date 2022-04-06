import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  image: any;
  children: any;
};

const BackgroundImage = ({image, children}: Props) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {children}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default BackgroundImage;
