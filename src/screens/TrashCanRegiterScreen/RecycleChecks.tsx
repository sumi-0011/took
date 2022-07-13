import React from 'react';
import {Box, Checkbox, FlatList, Text} from 'native-base';
import {RECYCLE_CHECK_LIST} from 'constants/trashCanRegister';

interface RecycleChecksProps {
  handleCheckChange: (values: string[]) => void;
}

function RecycleChecks({handleCheckChange}: RecycleChecksProps) {
  return (
    <>
      <Text>재활용 가능한 품목</Text>
      {/* TODO : 체크박스 색깔 수정 필요 (연한 그린으로 ) */}
      <Checkbox.Group
        colorScheme="green"
        onChange={values => handleCheckChange(values)}>
        <FlatList
          numColumns={2}
          data={RECYCLE_CHECK_LIST}
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

export default RecycleChecks;
