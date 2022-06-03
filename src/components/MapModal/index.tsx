import {updateStar, getUser, updateLastTookTime} from '@common/api/user';
import BadgeList from '@components/BadgeList';
import {HearFilltIcon, HeartOutlineIcon, ReportIcon} from '@components/Icon';
import IconBtn from '@components/IconBtn';
import {Box, Button, Center, HStack, Image, Pressable, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import styled from 'styled-components';
import {IUserInfo} from 'types/User';
import {user} from '../../recoil/user';

type Props = {};

function MapModal({}: Props) {
  const [isStar, setIsStar] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState<IUserInfo>(user);
  const currentTCId = 1;
  const [isTook, setIsTook] = useState<boolean>(false);

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
    const index = userInfo?.stars.findIndex(ele => ele === currentTCId);
    if (index !== -1) {
      setIsStar(true);
    }
  }, [userInfo?.stars]);

  useEffect(() => {
    const currentDate = new Date();
    const lastDate = new Date(userInfo?.lastTookTime.seconds * 1000);
    const diffTime =
      (currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60);

    if (diffTime >= 24) {
      setIsTook(true);
    } else {
      setIsTook(false);
    }
  }, [userInfo?.lastTookTime]);

  const _updateStar = (id: string, stars: number[]) => {
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

    const index = userInfo?.stars.findIndex(ele => ele == currentTCId);
    if (index === -1) {
      _updateStar(userInfo.id, [...userInfo.stars, currentTCId]);
    } else {
      const filterStars = userInfo.stars.filter(star => star !== currentTCId);
      _updateStar(userInfo.id, filterStars);
    }
  };

  const handleTookBtnClick = () => {
    updateLastTookTime(userInfo.id, userInfo.tookCnt).then(() => {
      fetchData();
    });
  };

  const handleReportClick = () => {
    console.log('신고하기 버튼 클릭');
  };

  return (
    <Modal borderTopRadius="20" p={5}>
      <Detail paddingY={2} borderBottomWidth="1" borderColor="coolGray.200">
        <DetailText
          name="공대 5호관 1층"
          address="대전광역시 유성구 대학로 99(궁동)"
          badgeList={['플라스틱', '유리병']}
        />
        <DetailImage url={'https://wallpaperaccess.com/full/317501.jpg'} />
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
  );
}

export default MapModal;
const DetailText = ({
  name,
  address,
  badgeList,
}: {
  name: string;
  address: string;
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
