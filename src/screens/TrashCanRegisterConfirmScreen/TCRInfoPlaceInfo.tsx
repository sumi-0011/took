import React from 'react';
import {Box, Text} from 'native-base';
import {LocationType} from 'types/LocationType';
import MapViewWrapper from '@components/MapViewWrapper';

interface PlaceInfoProps {
  name: string;
  address: string;
  coordinate: LocationType;
}

function TCRInfoPlaceInfo({name, address, coordinate}: PlaceInfoProps) {
  return (
    <Box>
      <Text bold fontSize={'lg'} accessibilityLabel="place-name">
        {name}
      </Text>
      <Text
        fontSize={'xs'}
        color="coolGray.500"
        accessibilityLabel="place-address">
        {address}
      </Text>
      <Box width={'100%'} height={150} marginTop={5} borderRadius={10}>
        <MapViewWrapper location={coordinate} />
      </Box>
    </Box>
  );
}

export default TCRInfoPlaceInfo;
