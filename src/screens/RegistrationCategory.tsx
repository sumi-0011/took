import {
  Box,
  Input,
  NativeBaseProvider,
  Text,
  Stack,
  FlatList,
} from 'native-base';
import React, {useState} from 'react';

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
];
const RegistrationCategory = () => {
  const [category, setcategory] = useState(categoryList);
  return (
    <NativeBaseProvider>
      <Text>RegistrationCategory</Text>
      <Box />
      <Box>
        <Input size="lg" placeholder="lg Input" />
        <FlatList
          numColumns={2}
          data={category}
          renderItem={({item}) => <Box>{item.name}</Box>}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default RegistrationCategory;
