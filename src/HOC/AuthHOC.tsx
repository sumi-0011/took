import React, {ComponentType} from 'react';
import {isLoggedIn} from '@api/fireAuthAPI';
import AuthNaviagtion from '@navigations/AuthNavigation';

export default function <P extends object>(Component: ComponentType<P>) {
  function AuthenticationCheck({...props}) {
    if (isLoggedIn) {
      return <Component {...(props as P)} />;
    } else {
      return <AuthNaviagtion />;
    }
  }
  return AuthenticationCheck;
}
