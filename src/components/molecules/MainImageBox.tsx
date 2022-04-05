import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import BackgroundImage from '../atoms/BackgroundImage';
import MainBox from '../atoms/MainBox';
import TextComponent from '../atoms/Text';

type Props = {
  image: any;
  mainText: string;
  subText: string;
  children?: any;
};

const MainImageBox = ({image, mainText, subText}: Props) => {
  return (
    <MainBox type="bottom">
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.bg} />
        <View style={styles.innerView}>
          <TextComponent size="small" textAlign="center" fontWeight="700">
            {subText}
          </TextComponent>
          <TextComponent size="small" textAlign="center" fontWeight="700">
            {mainText}
          </TextComponent>
        </View>
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
  innerView: {
    paddingBottom: 30,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
export default MainImageBox;
