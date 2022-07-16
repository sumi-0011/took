import {Box, Spinner} from 'native-base';
import React from 'react';

function CenterSpinner() {
  return (
    <Box
      w="100%"
      h="100%"
      backgroundColor="white"
      alignItems="center"
      justifyContent="center">
      <Spinner size="lg" />
    </Box>
  );
}

export default CenterSpinner;
