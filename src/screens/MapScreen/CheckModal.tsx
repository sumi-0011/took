import React, {useState} from 'react';
import {Box, Slider} from 'native-base';
import {updateTrashCanFull} from '@api/trashCanAPI';
import BaseModal from '@components/BaseModal';
import {useToast} from 'native-base';

interface CheckModalProps {
  currentTrashCanID: string;

  open: boolean;
  onClickModalDown: () => void;
}

function CheckModal({
  currentTrashCanID,
  onClickModalDown,
  open,
}: CheckModalProps) {
  const toast = useToast();

  const [inputValue, setInputValue] = useState(3);

  const handleUpdate = async () => {
    updateTrashCanFull(currentTrashCanID, inputValue);

    toast.show({
      description: '답변 감사합니다 :D',
    });
  };

  const handleChange = (value: number) => {
    setInputValue(value);
  };

  return (
    <>
      <Box>sumi</Box>
      <BaseModal
        title={'쓰레기통이 얼마나 찼나요?'}
        onAction={handleUpdate}
        open={open}
        onClose={onClickModalDown}>
        <Box alignItems="center" w="100%">
          <Slider
            w="5/6"
            maxW="300"
            defaultValue={5}
            minValue={0}
            maxValue={10}
            accessibilityLabel="hello world"
            colorScheme="green"
            value={inputValue}
            onChange={handleChange}
            step={1}>
            <Slider.Track>
              <Slider.FilledTrack bg="green.600" />
            </Slider.Track>
            <Slider.Thumb bg="green.600" />
          </Slider>
        </Box>
      </BaseModal>
    </>
  );
}
export default CheckModal;
