import React from 'react';
import {Box, Text} from 'native-base';
import MapView, {Marker} from 'react-native-maps';
import {LocationType} from 'types/LocationType';

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
        <MapView
          style={MapViewStyles}
          initialRegion={{
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}>
          <Marker coordinate={coordinate} />
        </MapView>
      </Box>
    </Box>
  );
}

const MapViewStyles = {
  flex: 1,
};

export default TCRInfoPlaceInfo;
