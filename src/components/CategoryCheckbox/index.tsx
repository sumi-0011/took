import React from 'react';
import {Box, Checkbox, FlatList, Text} from 'native-base';
import {categoryList} from 'utils/categoryList';

interface CategotyCheckboxProps {
  handleCheckChange: (values: string[]) => void;
}

function CategoryCheckbox({handleCheckChange}: CategotyCheckboxProps) {
  return (
    <>
      <Text>재활용 가능한 품목</Text>
      {/* TODO : 체크박스 색깔 수정 필요 (연한 그린으로 ) */}
      <Checkbox.Group
        colorScheme="green"
        accessibilityLabel="재활용 가능한 품목"
        onChange={values => handleCheckChange(values)}>
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
