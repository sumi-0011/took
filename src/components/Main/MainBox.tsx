import {Box, Pressable, Text} from 'native-base';
import React from 'react';
import styled from 'styled-components/native';
import ImageBg from '../ImageBg';

type Props = {
  sub: string;
  main: string;
  img: string;
  onPress?: any;
};

const MainBox = ({sub, main, img, onPress}: Props) => {
  return (
    <Container flex={1} rounded="md" shadow={3} overflow="hidden">
      <Pressable onPress={onPress}>
        <ImageBg img={img}>
          <Box
            flex={1}
            justifyContent="flex-end"
            alignItems="center"
            paddingBottom={5}>
            <Text fontSize="sm" color={'#fff'} bold>
              {sub}
            </Text>
            <Text fontSize="md" color={'#fff'} bold>
              {main}
            </Text>
          </Box>
        </ImageBg>
      </Pressable>
    </Container>
  );
};
const Container = styled(Box)`
  color: #fff;
`;
export default MainBox;
