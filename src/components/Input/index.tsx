import {Input as NativeInput} from 'native-base';
import React from 'react';

interface IInput {
  secondary?: boolean;
  ph: string;
  type: string;
  onChangeText: () => void;
  onBlur: () => void;
  value: string;
}

function Input({type, ph, ...rest}: IInput) {
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
      fontSize="16px"
      variant="underlined"
      value={rest.value}
      // InputLeftElement={<Icon size={5} ml="2" color="muted.400" />}
    />
  );
}

export default Input;
