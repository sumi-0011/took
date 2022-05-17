import {Input as NativeInput} from 'native-base';
import React from 'react';

interface IInput {
  secondary?: boolean;
  ph: string;
  type: string;
}

function Input({type, ph, ...rest}: IInput) {
  if (rest.secondary) {
    // return another styled NativeInput
  }

  // if default
  return (
    <NativeInput
      w={96}
      h={12}
      type={type}
      placeholder={ph}
      fontSize="16px"
      variant="underlined"
      // InputLeftElement={<Icon size={5} ml="2" color="muted.400" />}
    />
  );
}

export default Input;
