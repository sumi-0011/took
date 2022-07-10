import MapView, {Marker} from 'react-native-maps';
import {getTrashCans} from 'api/trashCan';
import {Box} from 'native-base';
import React, {useEffect, useState} from 'react';
import {requestAccessLocationPermission} from 'utils/permission';
import Geolocation from 'react-native-geolocation-service';
import {ITrashCan} from 'types/TrashCan';
import {LocationType} from 'types/LocationType';

interface MapContainerProps {
  onClickMarker: (id: string) => void;
}

function MapContainer({onClickMarker}: MapContainerProps) {
  const [trashCanList, setTrashCanList] = useState<ITrashCan[]>([]);
  const [location, setLocation] = useState<LocationType>();

  useEffect(() => {
    const fetchTrashCans = async () => {
      try {
        const response = await getTrashCans();
        setTrashCanList(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrashCans();
  }, []);

  useEffect(() => {
    const fetchCurrentPosition = async () => {
      try {
        const response = await requestAccessLocationPermission();

        if (response === 'granted') {
          Geolocation.getCurrentPosition(
            pos => {
              const {latitude, longitude} = pos.coords;
              setLocation({latitude, longitude});
            },
            error => {
              console.log(error);
            },
            {enableHighAccuracy: true, timeout: 3600, maximumAge: 3600},
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCurrentPosition();
  }, []);

  return (
    <Box flex="1">
      {location && (
        <MapView
          style={mapViewStyle}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}>
          <Marker coordinate={location} />
          {trashCanList?.map((item, index) => {
            return (
              <Marker
                key={index}
                title={item.name}
                identifier={item.id}
                coordinate={item.coordinate}
                image={require('../../images/trashCan.png')}
                onPress={() => onClickMarker(item.id)}
              />
            );
          })}
        </MapView>
      )}
    </Box>
  );
}

const mapViewStyle = {flex: 1};

export default MapContainer;
