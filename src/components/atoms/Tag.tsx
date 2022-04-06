import React from 'react';
import {StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';

type Props = {children: any; type: 'text' | 'badge'};

function Tag({children, type}: Props) {
  return (
    <Text style={[styles.basic, type === 'badge' ? styles.badge : styles.text]}>
      {children}
    </Text>
  );
}
const styles = StyleSheet.create({
  basic: {color: '#fff'},
  text: {},
  badge: {
    backgroundColor: '#E3E3E3',
    borderRadius: 5,
    padding: 5,
    fontSize: 12,
    color: '#313131',
  },
});
const Badge = styled(Text)`
  background-color: #e3e3e3;
  border-radius: 5;
  padding: 5;
  font-size: 12;
  color: #313131;
`


export default Tag;
