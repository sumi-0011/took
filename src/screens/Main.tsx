import React from 'react';
import {Button, View, Text, StyleSheet, ImageBackground} from 'react-native';
import TextComponent from '../components/atoms/Text';
import MainBox from '../components/atoms/MainBox';
import MainProfile from '../components/organisms/MainProfile';
import BackgroundImage from '../components/atoms/BackgroundImage';
import MainImageBox from '../components/molecules/MainImageBox';
type Props = {};
const image = {
  uri: 'https://navermaps.github.io/android-map-sdk/assets/2-3-navi.png',
};
const Main = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff',
        height: '100%',
      }}>
      <View style={boxStyles(1.8).box}>
        <MainBox>
          <MainProfile />
        </MainBox>
      </View>
      <View style={boxStyles(2).box}>
        <MainImageBox
          image={image}
          subText="지도에서"
          mainText="쓰레기통 찾기"
        />
        <MainImageBox
          image={image}
          subText="쓰레기통"
          mainText=" 위치 등록하기"
        />
      </View>

      <View style={boxStyles(1.5).box}>
        <View>
          <TextComponent>basic box</TextComponent>
        </View>
        <View>
          <TextComponent>basic box</TextComponent>
        </View>
      </View>
      <View style={boxStyles(1).box}>
        <MainBox>
          <TextComponent>basic box</TextComponent>
        </MainBox>
        <MainBox>
          <TextComponent>basic box</TextComponent>
        </MainBox>
      </View>
    </View>
  );
};
const boxStyles = (flex: number) =>
  StyleSheet.create({
    box: {
      flexDirection: 'row',
      flex: flex,
      marginVertical: 10,
    },
  });

export default Main;
