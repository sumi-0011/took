import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import TextComponent from '../atoms/Text';
import MainBox from '../atoms/MainBox';
import Profile from '../atoms/Profile';
type Props = {};

const MainProfile = () => {
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Profile img="https://en.pimg.jp/061/897/454/1/61897454.jpg" />
        <TextComponent>수미님 안녕하세요!</TextComponent>
      </View>
      <View>
        <TextComponent>진행바?</TextComponent>
        {/* <Profile img="https://en.pimg.jp/061/897/454/1/61897454.jpg" /> */}
      </View>
    </View>
  );
};
export default MainProfile;
