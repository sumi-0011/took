import {Box, Input, NativeBaseProvider, Text} from 'native-base';
import React, {useState} from 'react';
import BasicButton from '~/components/BasicButton';
import CategotyCheckbox from '~/components/Registraion/CategotyCheckbox';

export interface ICategory {
  name: string;
  key: string;
}
type Props = {};

const RegistrationCategory = ({navigation}: {navigation: any}) => {
  const [groupValue, setGroupValue] = useState([]);

  return (
    <NativeBaseProvider>
      <Box height={'100%'}>
        <Box flex={1} width={'100%'} />
        <Box p={5} bg={'#fff'}>
          <Text>쓰레기통 이름</Text>
          <Input size="lg" placeholder="lg Input" marginY={2} />
          <CategotyCheckbox
            groupValue={groupValue}
            setGroupValue={setGroupValue}
          />
          <BasicButton
            onPress={() => {
              navigation.navigate('RegistrationInfo');
            }}>
            사진 촬영
          </BasicButton>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default RegistrationCategory;
