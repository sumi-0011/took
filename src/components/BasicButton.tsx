import {Center, Pressable, Text} from 'native-base';
import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

type Props = {
  children: ReactNode;
  onPress?: () => any;
};

const BasicButton = ({onPress, children}: Props) => {
  return (
    <TookButton>
      <Pressable onPress={onPress}>
        <Text color={'#fff'} fontSize="lg" bold>
          {children}
        </Text>
      </Pressable>
    </TookButton>
  );
};
const TookButton = styled(Center)`
  background-color: #68de7b;
  padding: 10px;
  border-radius: 10px;
`;
export default BasicButton;
