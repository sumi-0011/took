import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import TextComponent from '../atoms/Text';
import MainBox from '../atoms/MainBox';
import Profile from '../atoms/Profile';
type Props = {};

const MainProfile = () => {
  return (
    <View style={{width: '100%', flexDirection: 'column'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <Profile img="https://en.pimg.jp/061/897/454/1/61897454.jpg" />
        <TextComponent>수미님 안녕하세요!</TextComponent>
        <TextComponent>></TextComponent>
      </View>
      <View style={{ justifyContent: 'center',  width: '100%',}}>
        <TextComponent size='small' textAlign='center'>진행바를 넣을것인가?! </TextComponent>
        <TextComponent size='small' textAlign='center'>그렇다면 라이브러리를 사용하자</TextComponent>
        {/* <Profile img="https://en.pimg.jp/061/897/454/1/61897454.jpg" /> */}
      </View>
    </View>
  );
};
export default MainProfile;
