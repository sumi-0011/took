import React from 'react';
import styled from 'styled-components/native';

type Props = {}

const Badge = (props: Props) => {
  return (
    <div>Badge</div>
  )
}

const Badge = styled(Text)`
  background-color: #e3e3e3;
  border-radius: 5;
  padding: 5;
  font-size: 12;
  color: #313131;
`


export default Badge  ;