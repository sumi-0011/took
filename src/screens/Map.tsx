import {Box, ChevronLeftIcon, NativeBaseProvider} from 'native-base';
import React from 'react';

type Props = {};

const Map = ({}: Props) => {
  return (
    <NativeBaseProvider>
      <Box>
        <ChevronLeftIcon size="4" />
      </Box>
      <Box>Hello</Box>
    </NativeBaseProvider>
  );
};

export default Map;
