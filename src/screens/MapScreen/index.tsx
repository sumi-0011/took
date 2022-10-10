import React, {useCallback, useState} from 'react';
import {Box} from 'native-base';
import BackButton from '@components/BackButton';
import MapContainer from './MapContainer';
import MapModal from './MapModal';
import CheckModal from './CheckModal';

function MapScreen({navigation}: any) {
  const [selectTrashCan, setSelectTrashCan] = useState<string>('');
  const [isMapModalVisible, setIsMapModalVisible] = useState<boolean>(false);
  const [isCheckModalVisible, setIsCheckModalVisible] = useState<boolean>(false);

  const onClickMarker = useCallback((id: string) => {
    setIsMapModalVisible(true);
    setSelectTrashCan(id);
  }, []);

  const onClickModal = useCallback(() => {
    setIsCheckModalVisible(true);
    setIsMapModalVisible(false);
  }, []);

  const onClickModalDown = useCallback(() => {
    setIsCheckModalVisible(false);
  }, []);

  return (
    <Box w="100%" h="100%">
      <BackButton navigation={navigation} />
      <MapContainer onClickMarker={onClickMarker} />
      {isMapModalVisible ? (
        <MapModal currentTrashCanID={selectTrashCan} onClickModal={onClickModal} />
      ) : null}
      {isCheckModalVisible ? (
        <CheckModal currentTrashCanID={selectTrashCan} onClickModalDown={onClickModalDown}/> )  : null }
    </Box>
  );
}

export default MapScreen;
