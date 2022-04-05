import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

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
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bg: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
export default BackgroundImage;
