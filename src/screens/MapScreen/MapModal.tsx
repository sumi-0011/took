import React, {useCallback, useEffect, useState} from 'react';
import {Box, HStack, Image, Text} from 'native-base';
import {useRecoilState} from 'recoil';
import {updateStar, getUser, updateLastTookTime} from '@api/userAPI';
import {getTrashCan} from '@api/trashCanAPI';
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

  const fetchMapModalData = useCallback(async () => {
    try {
      setIsLoading(true);

      const [user, trashCan] = await Promise.all([
        getUser(),
        getTrashCan(currentTrashCanID),
      ]);
      console.log('user, trashCan: ', user, trashCan);
      setUserInfo(user);
      setSelectTrashCanInfo(trashCan);

      const elapsedHour = getElapsedTime(user.lastTookTime);

      if (elapsedHour >= 3) {
        //3시간 이상 경과
        setIsTook(true);
      } else {
        setIsTook(false);
      }

      const target = user.stars.find(star => star === currentTrashCanID);

      if (target) {
        setIsStar(true);
      } else {
        setIsStar(false);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }, [currentTrashCanID, setUserInfo]);

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
          await fetchMapModalData();
        } catch (error) {
          console.log('updateStar error: ', error);
        }
      } else {
        const filterStars = userInfo.stars.filter(
          star => star !== currentTrashCanID,
        );

        try {
          await updateStar(filterStars);
          await fetchMapModalData();
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
        await fetchMapModalData();
      } catch (error) {
        console.warn('updateLastTookTime error: ', error);
      }
    }
  }, [fetchMapModalData, userInfo.tookCnt]);

  const handleReportClick = useCallback(() => {
    console.log('신고하기 버튼 클릭');
  }, []);

  return (
    <Box
      borderTopRadius="20"
      p={5}
      w="100%"
      position={'absolute'}
      bottom="0"
      bgColor={'#fff'}>
      {!isLoading ? (
        <>
          <Box
            flexDirection={'row'}
            paddingY={2}
            borderBottomWidth="1"
            borderColor="coolGray.200">
            <Box flex={1}>
              <Text fontSize="lg" bold>
                {selectTrashCanInfo?.name}
              </Text>
              {/* NOTE : addresss 자리  */}
              {/* <Text fontSize="sm" color={'coolGray.500'}>
                {address}
              </Text> */}
              <Box>
                <BadgeList data={selectTrashCanInfo?.tags ?? []} />
              </Box>
            </Box>
            {/* trash can image */}
            <Box w={100} h={'100%'}>
              <Image
                source={{
                  uri:
                    selectTrashCanInfo?.trashImage ??
                    'http://www.solartodaymag.com/news/photo/201705/4484_3192_3220.jpg',
                }}
                alt="detail img"
                width={100}
                height={90}
                borderRadius={10}
              />
            </Box>
          </Box>
          <HStack paddingY={3}>
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
  );
}

export default MapModal;
