import React from 'react';
import {StyleSheet, View} from 'react-native';
import Tag from '../atoms/Tag';
import TextComponent from '../atoms/Text';
import MainImageBox from '../molecules/MainImageBox';

type Props = {};

function MainNearByTrashBox({}: Props) {
  return (
    <View style={styles.box}>
      <MainImageBox
        image={{
          uri: 'https://littledeep.com/wp-content/uploads/2019/04/littledeep_nightsky_sns-1024x551.png',
        }}
        boxStyle={styles.innerView}>
        <View>
          <TextComponent color="#fff" fontWeight="bold">
            가장 가까운 쓰레기통
          </TextComponent>
        </View>
        <View style={styles.desc}>
          <TextComponent color="#fff" size="small" textAlign="right">
            공대 5호관 1층
          </TextComponent>
          <View style={styles.tagList}>
            <Tag type="text">#플라스틱 </Tag>
            <Tag type="text">#유리병 </Tag>
            <Tag type="text">#스티로폼 </Tag>
          </View>
        </View>
      </MainImageBox>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    flex: 1.5,
    marginVertical: 10,
  },
  innerView: {
    // alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    padding: 20,
  },
  title: {},
  desc: {
    height: '50%',
    justifyContent: 'space-between',
  },
  tagList: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default MainNearByTrashBox;
