import React from 'react';
import {StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  children?: any;
  type?: string;
};

const MainBox = ({children}: Props) => {
  return <Box>{children}</Box>;
};
const Box = styled(View)`
  flex: 1;
  background-color: #f4f4f4;
  margin-horizontal: 10;
  align-items: center;
  justify-content: center;
  border-radius: 10;
  overflow: hidden;
`;
// const styles = StyleSheet.create({
//   bottom: {
//     // justifyContent: 'flex-end',
//   },
//   basic: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//     marginHorizontal: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
// });
export default MainBox;
