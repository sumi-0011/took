import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  FlatListProps,
  StyleProp,
  ViewStyle,
  useWindowDimensions,
  ViewProps,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import {View} from 'native-base';
import Header from '@components/CollapsingHeader';
import TabBar from '@components/TabBar';
import useScrollSync from '@common/hooks/useScrollSync';
import ConnectionList from '@components/ConnectionList';
import {ITCInfo} from '@common/types/TCInfo';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BookmarksMock, RegistersMock} from '@common/mocks/UserScreenMock';
import {Visibility} from '@common/types/Visibility';
import {useScrollFlatList} from '@common/hooks/useScrollFlatlist';
import {UserInfo} from '@common/types/UserInfo';
import {getUserInfo} from '@common/api/fireAuth';

const TAB_BAR_HEIGHT = 68;

const Tab = createMaterialTopTabNavigator();

function UserScreen() {
  const {top, bottom} = useSafeAreaInsets();
  const {height: screenHeight} = useWindowDimensions();

  const [tabIndex, setTabIndex] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const {
    ref: bookmarkRef,
    scrollValue: bookmarkScrollValue,
    onScroll: bookmarkOnScroll,
  } = useScrollFlatList();

  const {
    ref: registerRef,
    scrollValue: registerScrollValue,
    onScroll: registerOnScroll,
  } = useScrollFlatList();

  const sync = useScrollSync(
    [
      {list: bookmarkRef, position: bookmarkScrollValue},
      {list: registerRef, position: registerScrollValue},
    ],
    {
      heightCollapsed: top,
      heightExpanded: headerHeight,
    },
  );

  const сurrentScrollValue = useDerivedValue(() => {
    return tabIndex === 0
      ? bookmarkScrollValue.value
      : registerScrollValue.value;
  }, [tabIndex, bookmarkScrollValue, registerScrollValue]);

  const translateY = useDerivedValue(
    () => -Math.min(сurrentScrollValue.value, headerHeight - top),
  );

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      paddingTop: headerHeight > 0 ? headerHeight + TAB_BAR_HEIGHT : 10,
      paddingBottom: bottom,
      minHeight: screenHeight + headerHeight - top,
    }),
    [headerHeight, bottom, screenHeight, top],
  );

  const sharedProps = useMemo<Partial<FlatListProps<ITCInfo>>>(
    () => ({
      contentContainerStyle,
      onMomentumScrollEnd: sync,
      onScrollEndDrag: sync,
      scrollEventThrottle: 16,
    }),
    [contentContainerStyle, sync],
  );

  const renderBookmark = useCallback(
    () => (
      <ConnectionList
        ref={bookmarkRef}
        data={BookmarksMock}
        onScroll={bookmarkOnScroll}
        {...sharedProps}
      />
    ),
    [bookmarkRef, bookmarkOnScroll, sharedProps],
  );

  const renderRegister = useCallback(
    () => (
      <ConnectionList
        ref={registerRef}
        data={RegistersMock}
        onScroll={registerOnScroll}
        {...sharedProps}
      />
    ),
    [registerRef, registerOnScroll, sharedProps],
  );

  const tabBarAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const tabBarStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      headerHeight > 0
        ? {
            top: 0,
            left: 0,
            right: 0,
            position: 'absolute',
            zIndex: 1,
          }
        : undefined,
      {top: headerHeight > 0 ? headerHeight : undefined},
      tabBarAnimatedStyle,
    ],
    [headerHeight, tabBarAnimatedStyle],
  );

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
    opacity: interpolate(
      translateY.value,
      [-(headerHeight - top), 0],
      [Visibility.Hidden, Visibility.Visible],
    ),
  }));

  const headerContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      headerHeight > 0
        ? {
            top: 0,
            left: 0,
            right: 0,
            position: 'absolute',
            zIndex: 1,
          }
        : undefined,
      {paddingTop: top},
      headerAnimatedStyle,
    ],

    [headerHeight, top, headerAnimatedStyle],
  );

  const renderTabBar = useCallback(
    props => (
      <Animated.View style={tabBarStyle}>
        <TabBar onIndexChange={setTabIndex} {...props} />
      </Animated.View>
    ),
    [tabBarStyle],
  );

  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    const {photoURL, displayName, uid} = getUserInfo();

    setUserInfo({
      avata: photoURL ?? '',
      name: displayName ?? '회원',
      userId: uid ?? '',
    });
  }, []);

  const handleHeaderLayout = useCallback<NonNullable<ViewProps['onLayout']>>(
    event => setHeaderHeight(event.nativeEvent.layout.height),
    [],
  );

  return (
    <View flex={1} backgroundColor="white">
      <Animated.View onLayout={handleHeaderLayout} style={headerContainerStyle}>
        <Header
          name={userInfo?.name ?? ''}
          bio="사용자 활동 시각화 데이터"
          photo={userInfo?.avata ?? ''}
        />
      </Animated.View>
      <Tab.Navigator
        tabBar={renderTabBar}
        screenOptions={{
          tabBarIndicatorStyle: {backgroundColor: 'black'},
          tabBarLabelStyle: {fontSize: 15},
          tabBarActiveTintColor: 'black',
          tabBarStyle: {
            elevation: 0,
            paddingBottom: 5,
            paddingTop: 5,
          },
        }}>
        <Tab.Screen name="즐겨찾기">{renderBookmark}</Tab.Screen>
        <Tab.Screen name="등록한 쓰레기통">{renderRegister}</Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}

export default memo(UserScreen);
