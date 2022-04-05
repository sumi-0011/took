import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children?: any;
  type?: string;
};

const MainBox = ({children, type}: Props) => {
  return (
    <View style={[styles.basic, type === 'bottom' && styles.bottom]}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  bottom: {
    justifyContent: 'flex-end',
    padding: 30,
  },
  basic: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
export default MainBox;
