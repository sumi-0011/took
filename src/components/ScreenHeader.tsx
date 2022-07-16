import {Text} from 'native-base';
import React from 'react';

interface ScreenHeaderProps {
  text: string;
}
//note : 회원가입, 로그인에서 사용, 꼭 이렇게 컴포넌트로 만들어서 사용해야할까요?
function ScreenHeader({text}: ScreenHeaderProps) {
  return (
    <Text fontSize="24px" fontWeight="bold" margin={10}>
      {text}
    </Text>
  );
}

export default ScreenHeader;
