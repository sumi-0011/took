import React from 'react';
import {Button, View, Text, StyleSheet, ImageBackground} from 'react-native';
import TextComponent from '../components/atoms/Text';
import MainBox from '../components/atoms/MainBox';
import MainProfile from '../components/organisms/MainProfile';
import BackgroundImage from '../components/atoms/BackgroundImage';
import MainImageBox from '../components/molecules/MainImageBox';
import MainNearByTrashBox from '../components/organisms/MainNearByTrashBox';
type Props = {};
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
          image={{
            uri: 'https://navermaps.github.io/android-map-sdk/assets/2-3-navi.png',
          }}>
          <View style={styles.innerView}>
            <TextComponent size="small" textAlign="center" fontWeight="700">
              지도에서
            </TextComponent>
            <TextComponent size="small" textAlign="center" fontWeight="700">
              쓰레기통 찾기
            </TextComponent>
          </View>
        </MainImageBox>
        <MainImageBox
          image={{
            uri: 'https://navermaps.github.io/android-map-sdk/assets/2-3-navi.png',
          }}>
          <View style={styles.innerView}>
            <TextComponent size="small" textAlign="center" fontWeight="700">
              쓰레기통
            </TextComponent>
            <TextComponent size="small" textAlign="center" fontWeight="700">
              위치 등록하기
            </TextComponent>
          </View>
        </MainImageBox>
      </View>

      <MainNearByTrashBox />
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
const styles = StyleSheet.create({
  innerView: {
    paddingBottom: 30,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
export default Main;
