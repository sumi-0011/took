import React, {useCallback, useEffect, useState} from 'react';
import {Box, HStack, Slide, Text, useToast} from 'native-base';
import {useRecoilState} from 'recoil';
import {
  addStaredTrashCan,
  deleteStaredTrashCan,
  getUser,
  updateLastTookTime,
} from '@api/userAPI';
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
  onClickModal: () => void;
}

function MapModal({currentTrashCanID, onClickModal}: MapModalProps) {
  const [userInfo, setUserInfo] = useRecoilState<UserInfoType>(UserState);

  const toast = useToast();

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
        console.warn(error);
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
      toast.show({
        description: '로그인이 필요합니다.',
      });
    } else {
      const target = userInfo?.stars.find(star => star === currentTrashCanID);

      if (!target) {
        try {
          await addStaredTrashCan(currentTrashCanID);
          await fetchMapModalData(true);
        } catch (error) {
          console.warn('addStaredTrashCans error: ', error);
        }
      } else {
        try {
          await deleteStaredTrashCan(currentTrashCanID);
          await fetchMapModalData(true);
        } catch (error) {
          console.warn('deleteStaredTrashCan error: ', error);
        }
      }
    }
  }, [currentTrashCanID, fetchMapModalData, toast, userInfo?.stars]);

  const handleTookBtnClick = useCallback(async () => {
    if (!isLoggedIn) {
      toast.show({
        description: '로그인이 필요합니다.',
      });
    } else {
      try {
        await updateLastTookTime(userInfo.tookCnt);
        await fetchMapModalData(true);
      } catch (error) {
        console.warn('updateLastTookTime error: ', error);
      }
    }
  }, [fetchMapModalData, toast, userInfo.tookCnt]);

  const handleReportClick = useCallback(async () => {
    if (!isLoggedIn) {
      toast.show({
        description: '로그인이 필요합니다.',
      });
      return;
    }
    if (!selectTrashCanInfo) {
      console.log('선택한 쓰레기통이 없습니다. ');
      return;
    }
    try {
      await updateTrashCanReportUser(selectTrashCanInfo.id);
    } catch (error) {
      console.warn('error: ', error);
    }
  }, [selectTrashCanInfo, toast]);

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
                {/* <Image
                  source={{
                    uri:
                      selectTrashCanInfo?.trashImage ??
                      'https://user-images.githubusercontent.com/49177223/198580813-2849f49d-c495-4931-9f97-745f4219f10e.png',
                  }}
                  alt="TrashCan"
                  width={100}
                  height={90}
                  borderRadius={10}
                /> */}
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
              onPress={() => {
                onClickModal();
                handleTookBtnClick();
              }}
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
