import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Pressable,
} from 'native-base';
import defaultImg from '@images/defaultImg.png';

interface ITCCard {
  title: string;
  category: string[];
  imageUrl: string;
  id: number;
  onPress?: () => void;
  onRemove: (id: number) => void;
}

function TCCard({title, imageUrl, id, onPress, onRemove}: ITCCard) {
  return (
    <Container>
      <Pressable onPress={onPress}>
        {({isPressed}) => {
          return (
            <Box overflow="hidden" bg={isPressed ? 'coolGray.100' : 'white'}>
              <HStack space={5} alignItems="center" paddingX={4} paddingY={4}>
                <Image
                  opacity={isPressed ? '0.6' : '1'}
                  source={defaultImg}
                  alt="image"
                  resizeMode="cover"
                  rounded="lg"
                  w={40}
                  h={24}
                />
                <Heading size="sm" numberOfLines={2} marginBottom={'5px'}>
                  {title}
                </Heading>
                <Button onPress={() => onRemove(id)}>삭제</Button>
              </HStack>
            </Box>
          );
        }}
      </Pressable>
    </Container>
  );
}

export default TCCard;
