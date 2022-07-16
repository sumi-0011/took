import React, {useEffect, useState} from 'react';
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

interface MapModalProps {
  currentTrashCanID: string;
}

function MapModal({currentTrashCanID}: MapModalProps) {
  const [isStar, setIsStar] = useState<boolean>(false);
  const [isTook, setIsTook] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useRecoilState<UserInfoType>(UserState);
  const [selectTCInfo, setSelectTCInfo] = useState<TrashCanInfoType>();

  const fetchData = async () => {
    try {
      const response = await getUser();
      response && setUserInfo(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrashCan(currentTrashCanID)
      .then(res => {
        setSelectTCInfo(res);
      })
      .catch(error => console.log('getTrashCan error: ', error));
  }, [currentTrashCanID]);

  useEffect(() => {
    const index = userInfo?.stars.findIndex(ele => ele === currentTrashCanID);
    index !== -1 ? setIsStar(true) : setIsStar(false);
  }, [currentTrashCanID, userInfo?.stars]);

  useEffect(() => {
    if (!userInfo) {
      return;
    }
    const currentDate = new Date();
    const diffTime =
      (currentDate.getTime() - userInfo.lastTookTime.getTime()) /
      (1000 * 60 * 60);
    diffTime >= 3 ? setIsTook(true) : setIsTook(false);
  }, [userInfo]);

  const updateStarApi = async (id: string, stars: string[]) => {
    try {
      await updateStar(id, stars);
      fetchData();
      setIsStar(!isStar);
    } catch (error) {
      console.log('updateStar error: ', error);
    }
  };

  const handleStarClick = () => {
    if (!isLoggedIn) {
      console.log('로그인이 필요합니다.');
      return;
    }

    const index = userInfo?.stars.findIndex(ele => ele === currentTrashCanID);
    if (index === -1) {
      // 추가
      updateStarApi(userInfo.uid, [...userInfo.stars, currentTrashCanID]);
    } else {
      // 제거
      const filterStars = userInfo.stars.filter(
        star => star !== currentTrashCanID,
      );
      updateStarApi(userInfo.uid, filterStars);
    }
  };

  const handleTookBtnClick = () => {
    updateLastTookTime(userInfo.uid, userInfo.tookCnt)
      .then(() => fetchData())
      .catch(error => console.log('updateLastTookTime error: ', error));
  };

  const handleReportClick = () => {
    // TODO : 신고하기 버튼 클릭
    console.log('신고하기 버튼 클릭');
  };

  return selectTCInfo ? (
    <Box
      borderTopRadius="20"
      p={5}
      w="100%"
      position={'absolute'}
      bottom="0"
      bgColor={'#fff'}>
      <Box
        flexDirection={'row'}
        paddingY={2}
        borderBottomWidth="1"
        borderColor="coolGray.200">
        {/* trach can info */}
        <Box flex={1}>
          <Text fontSize="lg" bold>
            {selectTCInfo.name}
          </Text>
          {/* NOTE : addresss 자리  */}
          {/* <Text fontSize="sm" color={'coolGray.500'}>
            {address}
          </Text> */}
          <Box>
            <BadgeList data={selectTCInfo.tags} />
          </Box>
        </Box>
        {/* trash can image */}
        <Box w={100} h={'100%'}>
          <Image
            source={{
              uri:
                selectTCInfo.trashImage ??
                'http://www.solartodaymag.com/news/photo/201705/4484_3192_3220.jpg',
            }}
            alt="detail img"
            width={100}
            height={90}
            borderRadius={10}
          />
        </Box>
      </Box>
      {/* button list */}
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
    </Box>
  ) : (
    <Text>정보가없습니다.</Text>
  );
}

export default MapModal;
