import {Box, HStack, Image, Text} from 'native-base';
import React from 'react';
import BadgeList from '@components/BadgeList';
import BasicButton from '@components/Button';
import {postAxios} from '@common/api/registation';
import {TCRegistSelect} from '../../recoil/TCRegist';
import {useRecoilValue} from 'recoil'; // 훅 import
import {addTC} from '@common/api/TCRegist';

function RegistrationInfo({navigation}: any) {
  const info = useRecoilValue(TCRegistSelect);

  console.log('info : ', info);
  const handleSubmit = () => {
    // const res = postAxios('TCRegist', info);
    const res = addTC(info);
    console.log('등록되었습니다', res);

    navigation.navigate('HomeScreen');
  };

  return (
    <Box p={5} bg={'#fff'} height={'100%'} justifyContent="space-between">
      <PlaceInfo
        name={info.name}
        address={`${info.coordinate[0]} + ${info.coordinate[1]}`}
        image={info.image}
      />
      <TrashBoxInfo image={info.trashImage} tagList={info.tags} />
      <BasicButton onPress={handleSubmit}>등록하기</BasicButton>
    </Box>
  );
}

export default RegistrationInfo;

export const PlaceInfo = ({
  name,
  address,
  image,
}: {
  name: string;
  address: string;
  image: string;
}) => {
  return (
    <Box>
      <Text bold fontSize={'lg'} accessibilityLabel="place-name">
        {name}
      </Text>
      <Text
        fontSize={'xs'}
        color="coolGray.500"
        accessibilityLabel="place-address">
        {address}
      </Text>
      <Image
        source={{
          uri: image,
        }}
        accessibilityLabel="쓰레기통 위치"
        width={'100%'}
        height={150}
        marginTop={5}
        borderRadius={10}
        alt="쓰레기통 위치"
      />
    </Box>
  );
};

export const TrashBoxInfo = ({
  image,
  tagList,
}: {
  image: string;
  tagList: Array<string>;
}) => {
  return (
    <Box marginTop={5}>
      <Text bold fontSize={'lg'}>
        쓰레기통 정보
      </Text>
      <Image
        source={{
          uri: image,
        }}
        width={'100%'}
        height={200}
        marginY={5}
        borderRadius={10}
        alt="쓰레기통 이미지"
        accessibilityLabel="쓰레기통 이미지"
      />
      <HStack>
        <BadgeList data={tagList} />
      </HStack>
    </Box>
  );
};
