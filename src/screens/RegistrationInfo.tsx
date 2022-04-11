import {Box, HStack, Image, NativeBaseProvider, Text} from 'native-base';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import BadgeList from '~/components/BadgeList';
import BasicButton from '~/components/BasicButton';

type Props = {};
const dummyInfo = {
  name: '대전역 건너 버스정류장',
  address: '대전광역시 동구 중앙로 211(장동)',
  image:
    'https://spi.maps.daum.net/map2/map/imageservice?IW=600&IH=350&MX=400205&MY=-11702&SCALE=2.5&service=open',
  trashImage:
    'https://mediahub.seoul.go.kr/uploads/mediahub/2021/09/tpuykXsdsBZQXeTWToBZZEYuYyQSMNof.jpeg',
  tagList: ['플라스틱', '유리병'],
};
interface InfoProps {
  name: string;
  address: string;
  image: string;
  trashImage: string;
  tagList: Array<string>;
}
const RegistrationInfo = ({}: Props) => {
  const [info, setInfo] = useState<InfoProps>(dummyInfo);

  return (
    <NativeBaseProvider>
      <Wrapper p={5} bg={'#fff'} height={'100%'} justifyContent="space-between">
        <Box>
          <Text bold fontSize={'lg'}>
            {info.name}
          </Text>
          <Text fontSize={'xs'} color="coolGray.500">
            {info.address}
          </Text>
          <Image
            source={{
              uri: info.image,
            }}
            width={'100%'}
            height={150}
            marginY={5}
            borderRadius={10}
            alt="위치"
          />
        </Box>
        <Box marginTop={5}>
          <Text bold fontSize={'lg'}>
            쓰레기통 정보
          </Text>
          <Image
            source={{
              uri: info.trashImage,
            }}
            width={'100%'}
            height={200}
            marginY={5}
            borderRadius={10}
            alt="쓰레기통 이미지"
          />
          <HStack>
            <BadgeList data={info.tagList} />
          </HStack>
        </Box>

        <BasicButton>등록하기</BasicButton>
      </Wrapper>
    </NativeBaseProvider>
  );
};
const Wrapper = styled(Box)``;
export default RegistrationInfo;
