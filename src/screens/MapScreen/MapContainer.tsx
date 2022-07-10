import MapView, {Marker} from 'react-native-maps';
import {getTrashCans} from 'api/trashCan';
import {Box} from 'native-base';
import React, {useEffect, useState} from 'react';
import {TrashCanType} from 'types/TrashCanType';
import useCurrentLocation from 'hooks/useCurrentLocation';

interface MapContainerProps {
  onClickMarker: (id: string) => void;
}

function MapContainer({onClickMarker}: MapContainerProps) {
  const [trashCanList, setTrashCanList] = useState<TrashCanType[]>([]);
  const {location} = useCurrentLocation();

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

  return (
    <Box flex="1">
      {location && (
        <MapView
          style={mapViewStyle}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
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
