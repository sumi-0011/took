import React, {useCallback, useState} from 'react';
import {Box} from 'native-base';
import BackButton from '@components/BackButton';
import MapContainer from './MapContainer';
import MapModal from './MapModal';

function MapScreen({navigation}: any) {
  const [selectTrashCan, setSelectTrashCan] = useState<string>('');
  const [isMapModalVisible, setIsMapModalVisible] = useState<boolean>(false);

  const onClickMarker = useCallback((id: string) => {
    setIsMapModalVisible(true);
    setSelectTrashCan(id);
  }, []);

  return (
    <Box w="100%" h="100%">
      <BackButton navigation={navigation} />
      <MapContainer onClickMarker={onClickMarker} />
      {isMapModalVisible ? (
        <MapModal currentTrashCanID={selectTrashCan} />
      ) : null}
    </Box>
  );
}

export default MapScreen;
