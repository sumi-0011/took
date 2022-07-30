import React, {useCallback, useEffect, useState} from 'react';
import {Box, HStack, Image, Slide, Text} from 'native-base';
import {useRecoilState} from 'recoil';
import {updateStar, getUser, updateLastTookTime} from '@api/userAPI';
import {getTrashCan, updateTrashCanReportUser} from '@api/trashCanAPI';
import {UserState} from '@recoil/UserState';
import {TrashCanInfoType} from 'types/TrashCanType';
import {UserInfoType} from 'types/UserType';
import {HearFilltIcon, HeartOutlineIcon, ReportIcon} from '@components/Icon';
import BadgeList from '@components/BadgeList';
import TOOKBtn from '@components/TookButton';
import IconBtn from './IconBtn';
import {isLoggedIn} from '@api/fireAuthAPI';
import CenterSpinner from '@components/CenterSpinner';
import {getElapsedTime} from '@utils/time';

interface MapModalProps {
  currentTrashCanID: string;
}

function MapModal({currentTrashCanID}: MapModalProps) {
  const [userInfo, setUserInfo] = useRecoilState<UserInfoType>(UserState);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isStar, setIsStar] = useState<boolean>(false);
  const [isTook, setIsTook] = useState<boolean>(false);
  const [selectTrashCanInfo, setSelectTrashCanInfo] =
    useState<TrashCanInfoType>();

  const fetchMapModalData = useCallback(
    async (isRefetch: boolean = false) => {
      try {
        !isRefetch && setIsLoading(true);
        const [user, trashCan] = await Promise.all([
          getUser(),
          getTrashCan(currentTrashCanID),
        ]);
        console.log('user, trashCan: ', user, trashCan);
        setUserInfo(user);
        setSelectTrashCanInfo(trashCan);

        const elapsedHour = getElapsedTime(user.lastTookTime);

        elapsedHour >= 3 ? setIsTook(true) : setIsTook(false);

        const target = user.stars.find(star => star === currentTrashCanID);

        if (target) {
          setIsStar(true);
        } else {
          setIsStar(false);
        }
      } catch (error) {
        console.log(error);
      }
      !isRefetch && setIsLoading(false);
    },
    [currentTrashCanID, setUserInfo],
  );

  useEffect(() => {
    fetchMapModalData();
  }, [fetchMapModalData]);

  const handleStarClick = useCallback(async () => {
    if (!isLoggedIn) {
      console.log('로그인이 필요합니다.');
    } else {
      const target = userInfo?.stars.find(star => star === currentTrashCanID);

      if (!target) {
        try {
          await updateStar([...userInfo.stars, currentTrashCanID]);
          await fetchMapModalData(true);
        } catch (error) {
          console.warn('updateStar error: ', error);
        }
      } else {
        const filterStars = userInfo.stars.filter(
          star => star !== currentTrashCanID,
        );

        try {
          await updateStar(filterStars);
          await fetchMapModalData(true);
        } catch (error) {
          console.log('updateStar error: ', error);
        }
      }
    }
  }, [currentTrashCanID, fetchMapModalData, userInfo.stars]);

  const handleTookBtnClick = useCallback(async () => {
    if (!isLoggedIn) {
      console.log('로그인이 필요합니다.');
    } else {
      try {
        await updateLastTookTime(userInfo.tookCnt);
        await fetchMapModalData(true);
      } catch (error) {
        console.warn('updateLastTookTime error: ', error);
      }
    }
  }, [fetchMapModalData, userInfo.tookCnt]);

  const handleReportClick = useCallback(async () => {
    if (!isLoggedIn) {
      console.log('로그인이 필요합니다.');
      return;
    }
    if (!selectTrashCanInfo) {
      console.log('선택한 쓰레기통이 없습니다. ');
      return;
    }
    try {
      await updateTrashCanReportUser(selectTrashCanInfo.id);
    } catch (error) {
      console.log('error: ', error);
    }
  }, [selectTrashCanInfo]);

  return (
    <Slide in={selectTrashCanInfo?.id ? true : false}>
      <Box
        borderTopRadius="20"
        p={5}
        w="100%"
        position={'absolute'}
        bottom="0"
        minH="280px"
        bgColor={'#fff'}>
        {!isLoading ? (
          <>
            <Box
              flexDirection={'row'}
              paddingY={2}
              borderBottomWidth="1"
              borderColor="coolGray.200"
              h={'115px'}>
              <Box flex={1}>
                <Text fontSize="lg" bold>
                  {selectTrashCanInfo?.name}
                </Text>
                <Box>
                  <BadgeList data={selectTrashCanInfo?.tags ?? []} />
                </Box>
              </Box>
              <Box w={100} h={'100%'}>
                <Image
                  source={{
                    uri:
                      selectTrashCanInfo?.trashImage ??
                      'http://www.solartodaymag.com/news/photo/201705/4484_3192_3220.jpg',
                  }}
                  alt="쓰레기통 사진"
                  width={100}
                  height={90}
                  borderRadius={10}
                />
              </Box>
            </Box>
            <HStack paddingY={3} h="70px">
              <IconBtn
                text="MY TOOK"
                icon={
                  isStar ? (
                    <HearFilltIcon size={25} />
                  ) : (
                    <HeartOutlineIcon size={25} />
                  )
                }
                onPress={handleStarClick}
              />
              <IconBtn
                text="신고하기"
                icon={<ReportIcon size={20} />}
                onPress={handleReportClick}
              />
            </HStack>
            <TOOKBtn
              name=" TOOK 버리기"
              isDisabled={!isTook}
              onPress={handleTookBtnClick}
            />
          </>
        ) : (
          <CenterSpinner />
        )}
      </Box>
    </Slide>
  );
}

export default MapModal;
