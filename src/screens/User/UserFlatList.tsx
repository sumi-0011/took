import {RegistersMock} from '@common/mocks/UserScreenMock';
import TCCard from '@components/TCCard';
import {FlatList} from 'native-base';
import React, {useCallback} from 'react';

function UserFlatList() {
  const renderItem = useCallback(
    ({item}) => (
      <TCCard
        id={item.id}
        title={item.title}
        category={item.category}
        imageUrl={item.imageUrl}
        onRemove={() => {}}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id + '', []);
  return (
    <FlatList
      data={RegistersMock}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      maxToRenderPerBatch={8}
      windowSize={12}
      initialNumToRender={7}
      removeClippedSubviews={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default UserFlatList;
