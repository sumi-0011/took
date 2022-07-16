import {Input as NativeInput} from 'native-base';
import React from 'react';

interface IInput {
  secondary?: boolean;
  ph: string;
  type: string;
  fontSize?: string;
  onChangeText: () => void;
  onBlur: () => void;
  value: string;
}
// 로그인, 회원가입에서 사용
function Input({type, ph, fontSize = '16px', ...rest}: IInput) {
  if (rest.secondary) {
    // return another styled NativeInput
  }

  // if default
  return (
    <NativeInput
      onBlur={rest.onBlur}
      onChangeText={rest.onChangeText}
      w={96}
      h={12}
      type={type}
      placeholder={ph}
      fontSize={fontSize}
      variant="underlined"
      value={rest.value}
    />
  );
}

export default Input;
