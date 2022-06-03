import {Heading, ScrollView} from 'native-base';
import React from 'react';

function UserInfoScreen() {
  return (
    <ScrollView flex={1}>
      <Heading fontSize="2xl" fontWeight="bold" color="green.600">
        내 정보
      </Heading>
    </ScrollView>
  );
}

export default UserInfoScreen;
