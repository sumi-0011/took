import React, {ReactChild} from 'react';
import {Text} from 'react-native';
interface TextProps {
  children: ReactChild;
  size?: 'medium' | 'large' | 'small';
  color?: string;
}
const fontSizeStyle: {[index: string]: number} = {
  large: 24,
  medium: 20,
  small: 16,
};
function TextComponent({children, size, color}: TextProps) {
  return (
    <Text
      style={{
        fontSize: fontSizeStyle[size ?? 'medium'],
        color: color ?? '#000',
      }}>
      {children}
    </Text>
  );
}

export default TextComponent;
