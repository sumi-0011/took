import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {LocationType} from 'types/LocationType';

interface MapViewWrapperProps {
  location: LocationType;
  setLocation: ({latitude, longitude}: LocationType) => void;
}

const MapViewWrapper = ({location, setLocation}: MapViewWrapperProps) => {
  return (
    <MapView
      style={mapViewStyle}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
      onRegionChangeComplete={region => {
        setLocation({
          latitude: region.latitude,
          longitude: region.longitude,
        });
      }}>
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
    </MapView>
  );
};

const mapViewStyle = {flex: 1};

export default MapViewWrapper;
