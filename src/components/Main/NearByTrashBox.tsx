import {Box, Text} from 'native-base';
import React from 'react';
import ImageBg from '../ImageBg';
import TagList from '../TagList';

type Props = {};

const NearByTrashBox = ({}: Props) => {
  return (
    <Box bg="coolGray.100" rounded="md" shadow={3} flex={1.5} overflow="hidden">
      <ImageBg
        img={
          'https://img.freepik.com/free-photo/white-paper-in-the-trash-can_144627-45832.jpg?size=626&ext=jpg&ga=GA1.2.1908636980.1634256000'
        }>
        <Box p={5} flex={1} justifyContent="space-between">
          <Box>
            <Text fontSize="lg" color="white" bold>
              가장 가까운 쓰레기통
            </Text>
          </Box>
          <Box alignItems={'flex-end'}>
            <Box>
              <Text color="white" fontSize="md">
                공대 5호관 1층
              </Text>
            </Box>
            <Box>
              <TagList
                style={{color: '#fff', fontSize: 'xs', textAlign: 'right'}}
                list={['플라스틱', '유리병']}
              />
            </Box>
          </Box>
        </Box>
      </ImageBg>
    </Box>
  );
};

export default NearByTrashBox;
