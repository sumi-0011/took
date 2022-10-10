import React from 'react';
import {Box, Text} from 'native-base';
import TOOKBtn from '@components/TookButton';
import { TrashCanState } from '@recoil/TrahCanState';
import { updateTrashCanYesOrNo } from '@api/trashCanAPI'

interface CheckModalProps {
    currentTrashCanID: string;
    onClickModalDown: () => void;
}

function CheckModal({currentTrashCanID, onClickModalDown}: CheckModalProps){
    
    return (
        <Box
          borderTopLeftRadius="20"
          p={5}
          w="100%"
          position={'absolute'}
          bottom="0"
          minH={"280px"}
          bgColor={"#ffff"}>
          <Box flex={1} alignSelf="center" paddingY={'10'}>
            <Text fontSize={'lg'} bold>쓰레기통이 가득 찼나요?</Text>
          </Box>
          <Box padding={'3'}>
            <TOOKBtn name='예' onPress={() => {
                updateTrashCanYesOrNo(currentTrashCanID, true);
                onClickModalDown();
            }} />
          </Box>
          <Box padding={'3'}>
            <TOOKBtn name='아니오' onPress={() => {
                updateTrashCanYesOrNo(currentTrashCanID, false);
                onClickModalDown();
            }} />
          </Box>
        </Box>
    )
}
export default CheckModal;

