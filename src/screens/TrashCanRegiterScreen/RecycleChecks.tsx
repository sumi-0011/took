import React, {useCallback} from 'react';
import {Box, Checkbox, FlatList, Text, VStack} from 'native-base';
import {RECYCLE_CHECK_LIST} from 'constants/trashCanRegister';
import {RecycleItem, RecycleTypes} from 'types/TrashCanType';

interface RecycleChecksProps {
  handleCheckChange: (values: string[]) => void;
}

function RecycleChecks({handleCheckChange}: RecycleChecksProps) {
  const renderItem = useCallback(
    ({item}: RecycleItem) => (
      <Box width="50%">
        <Checkbox value={item.name} my="2">
          {item.name}
        </Checkbox>
      </Box>
    ),
    [],
  );

  const keyExtractor = useCallback((item: RecycleTypes) => item.key, []);

  return (
    <VStack space={3}>
      <Text fontSize="xl">재활용 가능한 품목</Text>
      <Checkbox.Group
        colorScheme="green"
        onChange={values => handleCheckChange(values)}>
        <FlatList
          numColumns={2}
          data={RECYCLE_CHECK_LIST}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          m={1}
        />
      </Checkbox.Group>
    </VStack>
  );
}

export default RecycleChecks;
