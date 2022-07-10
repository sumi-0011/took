import React from 'react';
import {Box, Checkbox, FlatList, Text} from 'native-base';
import {categoryList} from 'utils/categoryList';

interface ICategotyCheckbox {
  setGroupValue: React.Dispatch<React.SetStateAction<never[]>>;
}

function CategoryCheckbox({setGroupValue}: ICategotyCheckbox) {
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
          data={categoryList}
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
}

export default CategoryCheckbox;
