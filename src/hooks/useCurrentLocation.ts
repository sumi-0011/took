import {useEffect, useState} from 'react';
import {requestAccessLocationPermission} from 'utils/permission';
import Geolocation from 'react-native-geolocation-service';
import {LocationType} from 'types/LocationType';

function useCurrentLocation() {
  const [location, setLocation] = useState<LocationType>();

  useEffect(() => {
    requestAccessLocationPermission().then(result => {
      if (result === 'granted') {
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
    });
  }, []);

  return {location, setLocation};
}

export default useCurrentLocation;
