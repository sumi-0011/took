import {Box, Text} from 'native-base';
import React from 'react';
import styled from 'styled-components/native';

type Props = {
  data: Array<string>;
};

const BadgeList = ({data}: Props) => {
  return (
    <Wrapper>
      {data.map((item, index) => (
        <Badge key={`tag${index}`} p={1} m={1}>
          {item}
        </Badge>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled(Box)`
  flex-direction: row;
`;
const Badge = styled(Text)`
  background-color: grey;
`;
export default BadgeList;
