import {Box} from 'native-base';
import React, {useCallback, useState} from 'react';
import MapModal from '@components/MapModal';
import BackButton from '@components/BackButton';
import MapContainer from './MapContainer';

function MapScreen({navigation}: any) {
  const [selectTrashCan, setSelectTrashCan] = useState<string>();

  const onClickMarker = useCallback((id: string) => {
    setSelectTrashCan(id);
  }, []);

  const onClickBackButton = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return (
    <Box w="100%" h="100%">
      <BackButton onPress={onClickBackButton} />
      <MapContainer onClickMarker={onClickMarker} />
      {selectTrashCan && <MapModal currentTCId={selectTrashCan} />}
    </Box>
  );
}

export default MapScreen;
