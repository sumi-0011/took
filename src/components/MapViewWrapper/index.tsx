import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {LocationType} from 'types/LocationType';

interface MapViewWrapperProps {
  location: LocationType;
  onRegionChangeComplete?: (region: LocationType) => void;
  children?: React.ReactNode;
}

const MapViewWrapper = ({
  location,
  onRegionChangeComplete,
  children,
}: MapViewWrapperProps) => {
  return (
    <MapView
      style={mapViewStyle}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
      onRegionChangeComplete={region =>
        onRegionChangeComplete && onRegionChangeComplete(region)
      }>
      <Marker coordinate={location} />
      {children}
    </MapView>
  );
};

const mapViewStyle = {flex: 1};

export default MapViewWrapper;
