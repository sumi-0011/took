import {ITCInfo} from '@common/types/TCInfo';
import TCCard from '@components/TCCard';
import {FlatList} from 'native-base';
import React, {useCallback} from 'react';

function UserFlatList({data}: {data: ITCInfo[]}) {
  const renderItem = useCallback(
    ({item}) => (
      <TCCard
        id={item.id}
        title={item.title}
        category={item.category}
        imageUrl={item.imageUrl}
        onRemove={() => console.log('!')}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id + item.title, []);

  return (
    <FlatList
      data={data}
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
