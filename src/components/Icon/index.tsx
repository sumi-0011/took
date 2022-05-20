import React from 'react';
import {Button} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IIcon {
  onPress: (() => void) | undefined;
}

export function BackIcon({onPress}: IIcon) {
  return (
    <Button variant="unstyled" onPress={onPress}>
      <Ionicons name="chevron-back-outline" size={25} />
    </Button>
  );
}

export function SettingIcon({onPress}: IIcon) {
  return (
    <Button onPress={onPress} variant="unstyled">
      <Ionicons name="options-outline" size={25} color="#000" />
    </Button>
  );
}

export function HeartOutlineIcon() {
  return <Ionicons name="heart-outline" size={25} />;
}

export function HeartIcon() {
  return <Ionicons name="heart" color={'#eb0626'} size={25} />;
}
