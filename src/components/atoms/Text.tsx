import React, {ReactChild} from 'react';
import {Text} from 'react-native';
interface TextProps {
  children: ReactChild;
  size?: 'medium' | 'large' | 'small' | 'x-small';
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  fontWeight?:
    | 'bold'
    | '700'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '800'
    | '900'
    | undefined;
}
const fontSizeStyle: {[index: string]: number} = {
  large: 24,
  medium: 16,
  small: 14,
  'x-small': 12,
};
function TextComponent({
  children,
  size,
  color,
  textAlign,
  fontWeight,
}: TextProps) {
  return (
    <Text
      style={{
        fontSize: fontSizeStyle[size ?? 'medium'],
        color: color ?? '#000',
        fontWeight,
        textAlign: textAlign,
      }}>
      {children}
    </Text>
  );
}

export default TextComponent;
