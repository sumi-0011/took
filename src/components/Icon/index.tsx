import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

interface IIcon {
  size?: number;
  color?: string;
  onPress?: (() => void) | undefined;
}

const INIT_COLOR = '#353535';
const INIT_SIZE = 25;

export function BackIcon({size, color}: IIcon) {
  return (
    <Ionicons
      name="chevron-back-outline"
      size={size ?? INIT_SIZE}
      color={color ?? INIT_COLOR}
    />
  );
}

export function SettingIcon({size = INIT_SIZE, color = INIT_COLOR}: IIcon) {
  return <Ionicons name="options-outline" size={size} color={color} />;
}

export function HeartOutlineIcon({
  size = INIT_SIZE,
  color = INIT_COLOR,
}: IIcon) {
  return <Ionicons name="heart-outline" size={size} color={color} />;
}

export function HearFilltIcon({size = INIT_SIZE, color = 'eb0626'}: IIcon) {
  return <Ionicons name="heart" color={color} size={size} />;
}

export function SunIcon({size = INIT_SIZE, color = INIT_COLOR}: IIcon) {
  return <Ionicons name="sunny-outline" color={color} size={size} />;
}

export function ReportIcon({size = INIT_SIZE, color = INIT_COLOR}: IIcon) {
  return <Octicons name="report" color={color} size={size} />;
}
