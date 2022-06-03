import {Box, Heading, ScrollView} from 'native-base';
import React from 'react';

function UserInfoScreen() {
  return (
    <ScrollView flex={1}>
      <Heading fontSize="2xl" fontWeight="bold" color="green.600">
        내 활동
      </Heading>
      <Box
        h="48"
        borderColor={'black'}
        borderRadius="xl"
        backgroundColor="coolGray.100"
        padding={10}>
        dsf
      </Box>
    </ScrollView>
  );
}

export default UserInfoScreen;
