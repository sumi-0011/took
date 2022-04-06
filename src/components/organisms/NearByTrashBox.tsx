import React from 'react';
import {StyleSheet, View} from 'react-native';
import Tag from '../atoms/Tag';
import Text from '../atoms/Text';
import MainImageBox from '../molecules/MainImageBox';
import styled from 'styled-components/native';
import ImageBgBox from '../molecules/ImageBgBox';

type Props = {};

function MainNearByTrashBox({}: Props) {
  return (
    <View style={styles.box}>
      <ImageBgBox
        image={{
          uri: 'https://littledeep.com/wp-content/uploads/2019/04/littledeep_nightsky_sns-1024x551.png',
        }}>
          <InnerBox>
          <View>
          <Text color="#fff" fontWeight="bold">
            가장 가까운 쓰레기통
          </Text>
        </View>
        <View style={styles.desc}>
          <Text color="#fff" size="small" textAlign="right">
            공대 5호관 1층
          </Text>
          <View style={styles.tagList}>
            <Text  color="#fff" size="small">#플라스틱 </Text>
            <Text color="#fff" size="small">#유리병 </Text>
            <Text color="#fff" size="small">#스티로폼 </Text>
          </View>
        </View>

          </InnerBox>
      
      </ImageBgBox>
    </View>
  );
}
const InnerBox = styled(View)`
  justify-content: space-between;  height: '100%';
    padding: 20;
`
const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    flex: 1.5,
    marginVertical: 10,
  },
  /* innerView: {
    // alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    padding: 20,
  }, */
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
