import {Pressable, Text} from 'native-base';
import React from 'react';
import styled from 'styled-components';

type IIconButton = {
  icon: any;
  text: string;
};

function IconBtn({icon, text}: IIconButton) {
  return (
    <IconButtonWrapper p={3}>
      {icon}
      <IconText>{text}</IconText>
    </IconButtonWrapper>
  );
}
const IconText = styled(Text)`
  color: #767676;
  margin-left: 10px;
`;
const IconButtonWrapper = styled(Pressable)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: #767676;
`;
export default IconBtn;
