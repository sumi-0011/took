import {Box, Checkbox, FlatList, Text} from 'native-base';
import React from 'react';
import {ICategory} from '~/screens/RegistrationCategory';
const CATEGORY_LIST: Array<ICategory> = [
  {
    name: '일반쓰레기',
    key: 'general-waste',
  },
  {
    name: '플라스틱',
    key: 'plastic',
  },
  {
    name: '종이류',
    key: 'paper',
  },
  {
    name: '음식물쓰레기',
    key: 'food-waste',
  },
  {
    name: '잡병',
    key: 'mixed-bottle',
  },
  {
    name: '유리병',
    key: 'glass-bottle',
  },
  {
    name: '스티로폼',
    key: 'styrofoam',
  },
  {
    name: '캔류',
    key: 'can',
  },
  {
    name: '헌옷수거함',
    key: 'old-clothes-locker',
  },
  {
    name: '고철',
    key: 'iron',
  },
  {
    name: '건전지',
    key: 'battery',
  },
  {
    name: '형광등',
    key: 'lamp',
  },
];
interface ICategotyCheckbox {
  groupValue: Array<ICategory>;
  setGroupValue: React.Dispatch<React.SetStateAction<never[]>>;
}
const CategotyCheckbox = ({groupValue, setGroupValue}: ICategotyCheckbox) => {
  return (
    <>
      <Text>재활용 가능한 품목</Text>
      <Checkbox.Group
        colorScheme="green"
        accessibilityLabel="재활용 가능한 품목"
        onChange={values => {
          setGroupValue(values || []);
        }}>
        <FlatList
          numColumns={2}
          data={CATEGORY_LIST}
          renderItem={({item}) => (
            <Box width={'50%'}>
              <Checkbox value={item.name} my="2">
                {item.name}
              </Checkbox>
            </Box>
          )}
          m={1}
        />
      </Checkbox.Group>
    </>
  );
};

export default CategotyCheckbox;
