import {Text} from 'native-base';
import React, {ReactNode} from 'react';

interface IErrorMsg {
  children: ReactNode;
}

function ErrorMsg({children}: IErrorMsg) {
  return <Text color={'error.600'}>{children}</Text>;
}

export default ErrorMsg;
