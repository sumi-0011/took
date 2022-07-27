import React, {ReactNode} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {LocationType} from 'types/LocationType';

interface MapViewWrapperProps {
  location: LocationType;
  handleRegionChange?: (region: LocationType) => void;
  children?: ReactNode;
}

const MapViewWrapper = ({
  location,
  handleRegionChange,
  children,
}: MapViewWrapperProps) => {
  return (
    <MapView
      style={mapViewStyle}
      showsUserLocaiton={true}
      showsMyLocationButton={true}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
      onRegionChangeComplete={region =>
        handleRegionChange && handleRegionChange(region)
      }>
      <Marker coordinate={location} />
      {children}
    </MapView>
  );
};

const mapViewStyle = {
  flex: 1,
};

export default MapViewWrapper;
