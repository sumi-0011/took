import React, {useCallback, useEffect, useState} from 'react';
import {Box, FlatList} from 'native-base';
import {getStaredTrashCans} from '@api/trashCanAPI';
import {TrashCanInfoType} from 'types/TrashCanType';
import TCCard from '@components/TrashCanCard';
import CenterSpinner from '@components/CenterSpinner';

function UserStarScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<TrashCanInfoType[] | undefined>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const stared = await getStaredTrashCans();
        setData(stared);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
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

  if (isLoading) {
    return <CenterSpinner />;
  }

  return (
    <Box w="100%" h="100%" backgroundColor="white">
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
    </Box>
  );
}

export default UserStarScreen;
