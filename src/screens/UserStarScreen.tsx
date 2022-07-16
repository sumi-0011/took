import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'native-base';
import {getStaredTrashCans} from '@api/trashCanAPI';
import {TrashCanInfoType} from 'types/TrashCanType';
import TCCard from '@components/TrashCanCard';

function UserStarScreen() {
  const [data, setData] = useState<TrashCanInfoType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const stared = await getStaredTrashCans();

      if (stared) {
        setData(stared);
      }
    }

    fetchData();
  }, []);

  const renderItem = useCallback(
    ({item}) => (
      <TCCard
        id={item.id}
        name={item.name}
        tags={item.tags}
        trashImage={item.trashImage}
        onRemove={() => console.log('!')}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id + item.name, []);

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

export default UserStarScreen;
