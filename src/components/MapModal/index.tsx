import {getTrashCan} from '@common/api/trashCan';
import {updateStar, getUser, updateLastTookTime} from '@common/api/user';
import BadgeList from '@components/BadgeList';
import {HearFilltIcon, HeartOutlineIcon, ReportIcon} from '@components/Icon';
import IconBtn from '@components/IconBtn';
import {Box, Button, Center, HStack, Image, Pressable, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import styled from 'styled-components';
import {ITrashCanInfo} from 'types/TrashCan';
import {IUserInfo} from 'types/User';
import {user} from '../../recoil/user';

type Props = {
  currentTCId: string;
};

function MapModal({currentTCId}: Props) {
  const [isStar, setIsStar] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState<IUserInfo>(user);
  const [isTook, setIsTook] = useState<boolean>(false);
  const [selectTCInfo, setSelectTCInfo] = useState<ITrashCanInfo>();
  const fetchData = async () => {
    getUser(userInfo.uid)
      .then(res => {
        res && setUserInfo(res);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    console.log('currentTCId', currentTCId);
    getTrashCan(currentTCId).then(res => {
      console.log('get', currentTCId, res);
      setSelectTCInfo(res);
    });
  }, [currentTCId]);
  useEffect(() => {
    const index = userInfo?.stars.findIndex(ele => ele === currentTCId);
    if (index !== -1) {
      setIsStar(true);
    }
  }, [currentTCId, userInfo?.stars]);

  useEffect(() => {
    if (!userInfo) {
      return;
    }
    const currentDate = new Date();
    const diffTime =
      (currentDate.getTime() - userInfo.lastTookTime.getTime()) /
      (1000 * 60 * 60);

    // console.log('diffTime', diffTime);
    if (diffTime >= 3) {
      setIsTook(true);
    } else {
      setIsTook(false);
    }
  }, [userInfo]);

  const _updateStar = (id: string, stars: string[]) => {
    updateStar(id, stars).then(() => {
      fetchData();
      setIsStar(!isStar);
    });
  };

  const handleStarClick = () => {
    if (!userInfo) {
      console.log('로그인이 필요합니다.');
      return;
    }

    const index = userInfo?.stars.findIndex(ele => ele === currentTCId);
    if (index === -1) {
      _updateStar(userInfo.uid, [...userInfo.stars, currentTCId]);
    } else {
      const filterStars = userInfo.stars.filter(star => star !== currentTCId);
      _updateStar(userInfo.uid, filterStars);
    }
  };

  const handleTookBtnClick = () => {
    updateLastTookTime(userInfo.uid, userInfo.tookCnt).then(() => {
      fetchData();
    });
  };

  const handleReportClick = () => {
    console.log('신고하기 버튼 클릭');
  };

  return selectTCInfo ? (
    <Modal borderTopRadius="20" p={5}>
      <Detail paddingY={2} borderBottomWidth="1" borderColor="coolGray.200">
        <DetailText
          name={selectTCInfo.name}
          // address="대전광역시 유성구 대학로 99(궁동)"
          badgeList={selectTCInfo.tags}
        />
        <DetailImage url={selectTCInfo.trashImage} />
      </Detail>
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
      <TookButton
        onPress={handleTookBtnClick}
        isDisabled={!isTook}
        _text={{
          color: '#fff',
          fontSize: 'lg',
          fontWeight: 'bold',
        }}>
        TOOK 버리기
      </TookButton>
      {/* <Pressable
          disabled={isTook}
          onPress={() => console.log('버리기 버튼 클릭')}>
          <Text color={'#fff'} fontSize="lg" bold>
            TOOK 버리기
          </Text>
        </Pressable> */}
    </Modal>
  ) : (
    <Text>정보가없습니다.</Text>
  );
}

export default MapModal;
const DetailText = ({
  name,
  address,
  badgeList,
}: {
  name: string;
  address?: string;
  badgeList: Array<string>;
}) => {
  return (
    <Box flex={1}>
      <Text fontSize="lg" bold>
        {name}
      </Text>
      <Text fontSize="sm" color={'coolGray.500'}>
        {address}
      </Text>
      <Box>
        <BadgeList data={badgeList} />
      </Box>
    </Box>
  );
};
const DetailImage = ({url}: {url: string}) => {
  return (
    <Box w={100} h={'100%'}>
      <Image
        source={{
          uri: url,
        }}
        alt="detail img"
        width={100}
        height={90}
        borderRadius={10}
      />
    </Box>
  );
};

const TookButton = styled(Button)`
  background-color: #68de7b;
  padding: 10px;
  border-radius: 10px;
`;

const Detail = styled(Box)`
  flex-direction: row;
`;
const Modal = styled(Box)`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #fff;
`;
