import BadgeList from '@components/BadgeList';
import {HeartOutlineIcon, ReportIcon} from '@components/Icon';
import IconBtn from '@components/IconBtn';
import {Box, Center, HStack, Image, Pressable, Text} from 'native-base';
import React from 'react';
import styled from 'styled-components';

type Props = {};

function MapModal({}: Props) {
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
        <IconBtn text="MY TOOK" icon={<HeartOutlineIcon size={25} />} />
        <IconBtn text="신고하기" icon={<ReportIcon size={20} />} />
      </HStack>
      <TookButton>
        <Pressable onPress={() => console.log('버리기 버튼 클릭')}>
          <Text color={'#fff'} fontSize="lg" bold>
            TOOK 버리기
          </Text>
        </Pressable>
      </TookButton>
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

const TookButton = styled(Center)`
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
