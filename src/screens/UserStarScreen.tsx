import React, {useCallback, useEffect, useState} from 'react';
import {Box, FlatList} from 'native-base';
import {TrashCanInfoType} from 'types/TrashCanType';
import TCCard from '@components/TrashCanCard';
import CenterSpinner from '@components/CenterSpinner';
import {deleteStaredTrashCan, getStaredTrashCans} from '@api/userAPI';

function UserStarScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<TrashCanInfoType[] | undefined>([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const stared = await getStaredTrashCans();
      setData(stared);
    } catch (error) {
      console.warn(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteStarTrashCan = useCallback(async (trashCanID: string) => {
    await deleteStaredTrashCan(trashCanID);
    await fetchData();
  }, []);

  const renderItem = useCallback(
    ({item}) => (
      <TCCard
        id={item.id}
        name={item.name}
        tags={item.tags}
        trashImage={item.trashImage}
        onRemove={() => handleDeleteStarTrashCan(item.id)}
      />
    ),
    [handleDeleteStarTrashCan],
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
