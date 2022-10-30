import React, {useCallback, useEffect, useState} from 'react';
import {Box, FlatList} from 'native-base';
import {TrashCanInfoType} from 'types/TrashCanType';
import TCCard from '@components/TrashCanCard';
import CenterSpinner from '@components/CenterSpinner';
import {getRegisterTrashCans} from '@api/userAPI';

function UserTCRScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<TrashCanInfoType[] | undefined>([]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const registed = await getRegisterTrashCans();
      setData(registed);
    } catch (error) {
      console.warn(error);
    }
    setIsLoading(false);
  }, []);

  const renderItem = useCallback(
    ({item}) => (
      <TCCard
        id={item.id}
        name={item.name}
        tags={item.tags}
        trashImage={item.trashImage}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id + item.name, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

export default UserTCRScreen;
