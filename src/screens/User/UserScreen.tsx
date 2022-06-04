import React, {useEffect, useState} from 'react';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import UserInfoScreen from './UserInfoScreen';
import UserFlatList from './UserFlatList';
import {Animated, StyleSheet} from 'react-native';
import {getRegisterTrashCans, getStaredTrashCans} from '@common/api/trashCan';
import {ITrashCanInfo} from 'types/TrashCan';

const {event, ValueXY} = Animated;
const scrollY = new ValueXY();

function UserScreen({navigation}: any) {
  const [staredTrashCans, setStaredTrashCans] = useState<ITrashCanInfo[]>();
  const [registedTrashCans, setRegistedTrashCans] = useState<ITrashCanInfo[]>();

  useEffect(() => {
    async function fetchData() {
      const stared = await getStaredTrashCans();
      const registed = await getRegisterTrashCans();

      setStaredTrashCans(stared);
      setRegistedTrashCans(registed);
    }

    fetchData();
  }, []);

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
          content: <UserInfoScreen navigation={navigation} />,
        },
        {
          title: '등록한 쓰레기통',

          // card 컴포넌트 정제하기
          content: <UserFlatList data={registedTrashCans} />,
        },
        {
          title: '즐겨찾기',
          content: <UserFlatList data={staredTrashCans} />,
        },
      ]}
    />
  );
}

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

export default UserScreen;
