import {getTrashCans} from '@api/trashCanAPI';
import useCurrentLocation from '@hooks/useCurrentLocation';
import {getDistanceFromLatLonInKm} from '@utils/distance';
import {Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {TrashCanType} from 'types/TrashCanType';
import BackgroundImage from './BackgroundImage';
import PressableBox from './PressableBox';
import TagList from './TagList';

function ClosetTrashCanBox() {
  const [closetTrashCan, setclosetTrashCan] = useState<TrashCanType>();
  const {location} = useCurrentLocation();

  useEffect(() => {
    getClosetTrashCan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const getClosetTrashCan = async () => {
    try {
      const trashCans = await getTrashCans();
      let closetTrashCanInfo: {
        distance: number;
        id: string;
      } = {
        distance: Number.MAX_SAFE_INTEGER,
        id: '',
      };

      trashCans.forEach(({id, coordinate}) => {
        const {latitude, longitude} = coordinate;
        const TrashCanBeteenDistance = getDistanceFromLatLonInKm(
          location?.latitude,
          location?.longitude,
          latitude,
          longitude,
        );

        if (closetTrashCanInfo.distance > TrashCanBeteenDistance) {
          closetTrashCanInfo = {
            distance: TrashCanBeteenDistance,
            id,
          };
        }
      });

      const findClosetTrashCan = trashCans.filter(
        trashCan => trashCan.id === closetTrashCanInfo.id,
      )[0];

      setclosetTrashCan(findClosetTrashCan);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <PressableBox height="48" onPress={() => console.log('clicked')}>
      {closetTrashCan ? (
        <BackgroundImage img={closetTrashCan?.trashImage}>
          <VStack p={5} flex={1} justifyContent="space-between">
            <Text fontSize="xl" color="white" bold>
              가장 가까운 쓰레기통
            </Text>
            <VStack alignItems={'flex-end'} space="1">
              <Text color="white" fontSize="lg">
                {closetTrashCan?.name}
              </Text>
              <TagList
                color="white"
                fontSize="md"
                list={closetTrashCan?.tags ?? []}
              />
            </VStack>
          </VStack>
        </BackgroundImage>
      ) : (
        <Text>가까운 쓰레기통이 없습니다. </Text>
      )}
    </PressableBox>
  );
}

export default ClosetTrashCanBox;
