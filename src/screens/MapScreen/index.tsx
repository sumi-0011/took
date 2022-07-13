import {Box} from 'native-base';
import React, {useCallback, useState} from 'react';
import BackButton from '@components/BackButton';
import MapContainer from './MapContainer';
import MapModal from './MapModal';

function MapScreen({navigation}: any) {
  const [selectTrashCan, setSelectTrashCan] = useState<string>();

  const onClickMarker = useCallback((id: string) => {
    setSelectTrashCan(id);
  }, []);

  return (
    <Box w="100%" h="100%">
      <BackButton navigation={navigation} />
      <MapContainer onClickMarker={onClickMarker} />
      {selectTrashCan && <MapModal currentTCId={selectTrashCan} />}
    </Box>
  );
}

export default MapScreen;
