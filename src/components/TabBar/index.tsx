import React, {useEffect} from 'react';
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';

interface ITabBar extends MaterialTopTabBarProps {
  onIndexChange?: (index: number) => void;
}

function TabBar({onIndexChange, ...props}: ITabBar) {
  const {index} = props.state;

  useEffect(() => {
    onIndexChange?.(index);
  }, [onIndexChange, index]);

  return <MaterialTopTabBar {...props} />;
}

export default TabBar;
