import React from 'react';
import {Box, Image, Text} from 'native-base';
import BadgeList from '@components/BadgeList';

interface TCRInfoProps {
  image: string;
  tagList: string[];
}

function TCRInfo({image, tagList}: TCRInfoProps) {
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
      />
      <BadgeList data={tagList} />
    </Box>
  );
}

export default TCRInfo;
