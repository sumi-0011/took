import React, {ComponentType} from 'react';
import {isLoggedIn} from '@common/api/fireAuth';

export default function <P extends object>(Component: ComponentType<P>) {
  function AuthenticationCheck({...props}) {
    // if (isLoggedIn() === false) {
    //   props.navigation.replace('Auth');
    // }
    props.navigation.replace('Auth');

    return <Component {...(props as P)} />;
  }
  return AuthenticationCheck;
}
