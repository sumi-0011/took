import React from 'react';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import UserInfoScreen from './UserInfoScreen';
import UserFlatList from './UserFlatList';
import {Animated, StyleSheet} from 'react-native';
import {BookmarksMock, RegistersMock} from '@common/mocks/UserScreenMock';

const {event, ValueXY} = Animated;
const scrollY = new ValueXY();

const styles = StyleSheet.create({
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 40,
  },
  tabTextContainerStyle: {
    backgroundColor: 'transparent',
    borderRadius: 18,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: '#ffffff',
  },
  tabTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: 'white',
  },
  tabTextActiveStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: 'black',
  },
  tabWrapperStyle: {
    paddingVertical: 15,
  },
  tabsContainerStyle: {
    paddingHorizontal: 10,
  },
  contentContiner: {
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  contentText: {
    fontSize: 18,
  },
});

function UserScreen() {
  return (
    <StickyParallaxHeader
      headerType="TabbedHeader"
      backgroundColor={'#56bf66'}
      bounces={true}
      contentContainerStyles={styles.contentContiner}
      foregroundImage={{
        uri: 'https://avatars.githubusercontent.com/u/28756358?v=4',
      }}
      headerHeight={40}
      parallaxHeight={250}
      title={'Byeongmin Jeon'}
      titleStyle={styles.titleStyle}
      rememberTabScrollPosition={true}
      tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
      tabTextStyle={styles.tabTextStyle}
      tabTextActiveStyle={styles.tabTextActiveStyle}
      tabsContainerStyle={styles.tabsContainerStyle}
      scrollEvent={event([{nativeEvent: {contentOffset: {y: scrollY.y}}}], {
        useNativeDriver: false,
      })}
      tabs={[
        {
          title: '내 정보',
          // content 에 내 정보 이쁘게 만들어서 넣기
          content: <UserInfoScreen />,
        },
        {
          title: '등록한 쓰레기통',

          // card 컴포넌트 정제하기
          content: <UserFlatList data={RegistersMock} />,
        },
        {
          title: '즐겨찾기',
          content: <UserFlatList data={BookmarksMock} />,
        },
      ]}
    />
  );
}
export default UserScreen;
