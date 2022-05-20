import {Center, Pressable, Text} from 'native-base';
import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

interface IButton {
  children: ReactNode;
  onPress?: () => any;
}

function BasicButton({onPress, children}: IButton) {
  return (
    <TookButton>
      <Pressable onPress={onPress}>
        <Text color={'#fff'} fontSize="lg" bold>
          {children}
        </Text>
      </Pressable>
    </TookButton>
  );
}

const TookButton = styled(Center)`
  background-color: #68de7b;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
`;

export default BasicButton;
