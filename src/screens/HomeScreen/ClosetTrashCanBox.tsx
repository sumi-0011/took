import {getTrashCans} from '@api/trashCanAPI';
import useCurrentLocation from '@hooks/useCurrentLocation';
import {getDistanceFromLatLonInKm} from '@utils/distance';
import {RECYCLE_FILTER_LIST} from 'constants/trashCanRegister';
import {Box, CheckIcon, Select, Text, VStack} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {TrashCanType} from 'types/TrashCanType';
import BackgroundImage from './BackgroundImage';
import PressableBox from './PressableBox';
import TagList from './TagList';

function ClosetTrashCanBox() {
  const {location} = useCurrentLocation();

  const [closetTrashCan, setclosetTrashCan] = useState<TrashCanType>();
  const [seletedFilter, setSeletedFilter] = useState('');

  const getClosetTrashCan = useCallback(
    async (currentLocation: {latitude: number; longitude: number}) => {
      try {
        const trashCans = await getTrashCans();
        let closetTrashCanInfo: {
          distance: number;
          id: string;
        } = {
          distance: Number.MAX_SAFE_INTEGER,
          id: '',
        };
        trashCans.forEach(({id, coordinate, tags}) => {
          if (seletedFilter && seletedFilter !== '전체') {
            if (!tags.includes(seletedFilter)) {
              return;
            }
          }

          const {latitude, longitude} = coordinate;
          const TrashCanBeteenDistance = getDistanceFromLatLonInKm(
            currentLocation.latitude,
            currentLocation.longitude,
            latitude,
            longitude,
          );

          const ONE_KM = 1;
          if (
            TrashCanBeteenDistance < ONE_KM &&
            closetTrashCanInfo.distance > TrashCanBeteenDistance
          ) {
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
    },
    [seletedFilter],
  );

  useEffect(() => {
    location && getClosetTrashCan(location);
  }, [getClosetTrashCan, location]);

  return (
    <>
      <Box marginBottom={3}>
        <Select
          selectedValue={seletedFilter}
          defaultValue={'all'}
          accessibilityLabel="Choose filtering"
          placeholder="Choose filtering"
          _selectedItem={{
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setSeletedFilter(itemValue)}>
          {RECYCLE_FILTER_LIST.map(({key, name}) => (
            <Select.Item key={key} label={name} value={name} />
          ))}
        </Select>
      </Box>
      <PressableBox height="48" onPress={() => console.log('clicked')}>
        {closetTrashCan ? (
          <BackgroundImage img={closetTrashCan.trashImage}>
            <VStack p={5} flex={1} justifyContent="space-between">
              <Text fontSize="xl" color="white" bold>
                가장 가까운 쓰레기통
              </Text>
              <VStack alignItems={'flex-end'} space="1">
                <Text color="white" fontSize="lg">
                  {closetTrashCan.name}
                </Text>
                <TagList
                  color="white"
                  fontSize="md"
                  list={closetTrashCan.tags ?? []}
                />
              </VStack>
            </VStack>
          </BackgroundImage>
        ) : (
          <Text>가까운 쓰레기통이 없습니다. </Text>
        )}
      </PressableBox>
    </>
  );
}

export default ClosetTrashCanBox;
