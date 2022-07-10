import {Text} from 'native-base';
import React from 'react';

interface ScreenHeaderProps {
  text: string;
}

function ScreenHeader({text}: ScreenHeaderProps) {
  return (
    <Text fontSize="24px" fontWeight="bold" margin={10}>
      {text}
    </Text>
  );
}

export default ScreenHeader;
