import {Box, Input, NativeBaseProvider, Text} from 'native-base';
import React, {useState} from 'react';
import BasicButton from '~/components/BasicButton';
import CategotyCheckbox from '~/components/Registraion/CategotyCheckbox';

export interface ICategory {
  name: string;
  key: string;
}
interface IRegistraionInput {
  checks: Array<string>;
  name: string;
}
const RegistrationCategory = ({navigation}: {navigation: any}) => {
  const [inputName, setInputName] = useState('');
  const [groupValue, setGroupValue] = useState([]);

  return (
    <NativeBaseProvider>
      <Box height={'100%'}>
        <Box flex={1} width={'100%'} />
        <Box p={5} bg={'#fff'}>
          <Text>쓰레기통 이름</Text>
          <Input
            size="lg"
            placeholder="lg Input"
            marginY={2}
            value={inputName}
            onChangeText={text => setInputName(text)}
          />
          <CategotyCheckbox
            groupValue={groupValue}
            setGroupValue={setGroupValue}
          />
          <BasicButton
            onPress={() => {
              navigation.navigate('RegistrationInfo', {
                name: inputName,
                checkList: groupValue,
              });
            }}>
            사진 촬영
          </BasicButton>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default RegistrationCategory;
