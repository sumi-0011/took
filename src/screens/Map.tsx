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
          <Detail paddingY={5}>
            <DetailText>
              <Text fontSize="lg" bold>
                공대 5호관 1층
              </Text>
              <Text fontSize="sm" color={'coolGray.500'}>
                대전광역시 유성구 대학로 99(궁동)
              </Text>
              <Box>
                <BadgeList data={['플라스틱', '유리병']} />
              </Box>
            </DetailText>
            <DetailImg w={100}>
              <Image
                source={{
                  uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                alt="Alternate Text"
                width={100}
                height={90}
                borderRadius={10}
              />
            </DetailImg>
          </Detail>
        </Modal>
      </Wrapper>
    </NativeBaseProvider>
  );
};
const Detail = styled(Box)`
  flex-direction: row;
`;
const DetailText = styled(Box)`
  flex: 1;
`;
const DetailImg = styled(Box)`
  height: 100%;
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
