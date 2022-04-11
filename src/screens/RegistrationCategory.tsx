import {
  Box,
  Input,
  NativeBaseProvider,
  Text,
  Stack,
  FlatList,
  Checkbox,
  FormControl,
} from 'native-base';
import React, {useState} from 'react';
import BasicButton from '~/components/BasicButton';

type Props = {};
const categoryList = [
  {
    name: '일반쓰레기',
    key: 'general-waste',
    check: false,
  },
  {
    name: '플라스틱',
    key: 'plastic',
    check: false,
  },
  {
    name: '종이류',
    key: 'paper',
    check: false,
  },
  {
    name: '음식물쓰레기',
    key: 'food-waste',
    check: false,
  },
  {
    name: '잡병',
    key: 'mixed-bottle',
    check: false,
  },
  {
    name: '유리병',
    key: 'glass-bottle',
    check: false,
  },
  {
    name: '스티로폼',
    key: 'styrofoam',
    check: false,
  },
  {
    name: '캔류',
    key: 'can',
    check: false,
  },
  {
    name: '헌옷수거함',
    key: 'old-clothes-locker',
    check: false,
  },
  {
    name: '고철',
    key: 'iron',
    check: false,
  },
  {
    name: '건전지',
    key: 'battery',
    check: false,
  },
  {
    name: '형광등',
    key: 'lamp',
    check: false,
  },
];
const RegistrationCategory = () => {
  const [category, setcategory] = useState(categoryList);
  return (
    <NativeBaseProvider>
      <Box height={'100%'}>
        <Box flex={1} width={'100%'}>
          <Text>Hello</Text>
        </Box>
        <Box p={5} bg={'#fff'}>
          {/* <FormControl> */}
          <Input size="lg" placeholder="lg Input" marginY={2} />
          <FlatList
            numColumns={2}
            data={category}
            renderItem={({item}) => (
              <CheckInput name={item.name} checked={item.check} />
            )}
          />
          {/* </FormControl> */}

          <BasicButton>사진 촬영</BasicButton>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};
const CheckInput = ({name, checked}: {name: string; checked: boolean}) => {
  return (
    <Box flex={1} paddingY={2}>
      <Checkbox value={name} defaultIsChecked={checked}>
        {name}
      </Checkbox>
    </Box>
  );
};
export default RegistrationCategory;
