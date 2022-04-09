import {
  Box,
  ChevronLeftIcon,
  Image,
  NativeBaseProvider,
  Text,
} from 'native-base';
import React from 'react';
import styled from 'styled-components/native';
import BadgeList from '~/components/BadgeList';

type Props = {};

const Map = ({}: Props) => {
  return (
    <NativeBaseProvider>
      {/* <Box>
        <ChevronLeftIcon size="4" />
      </Box>
      <Box>Hello</Box> */}
      <Wrapper>
        Wrapper
        <Modal borderTopRadius="20" p={5} h={300}>
          <Detail paddingY={5} borderBottomWidth="1" borderColor="coolGray.200">
            <DetailText
              name=" 공대 5호관 1층"
              address="대전광역시 유성구 대학로 99(궁동)"
              badgeList={['플라스틱', '유리병']}
            />
            <DetailImage url={'https://wallpaperaccess.com/full/317501.jpg'} />
          </Detail>
        </Modal>
      </Wrapper>
    </NativeBaseProvider>
  );
};
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
const Detail = styled(Box)`
  flex-direction: row;
`;

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
`;
const Modal = styled(Box)`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #fff;
`;
export default Map;
