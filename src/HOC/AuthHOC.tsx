import React, {ComponentType} from 'react';
import {isLoggedIn} from '@api/fireAuthAPI';
import AuthNaviagtion from '@navigations/AuthNavigation';

export default function <P extends object>(Component: ComponentType<P>) {
  function AuthenticationCheck({...props}) {
    if (isLoggedIn() === false) {
      return <AuthNaviagtion />;
    } else {
      return <Component {...(props as P)} />;
    }
  }
  return AuthenticationCheck;
}
