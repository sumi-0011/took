import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Pressable,
  VStack,
} from 'native-base';
import defaultImg from '@images/defaultImg.png';
import BadgeList from '@components/BadgeList';

interface ITCCard {
  name: string;
  tags: string[];
  id: string;
  trashImage: string;
  onPress?: () => void;
  onRemove: () => Promise<void>;
}

function TCCard({name, trashImage, tags, id, onPress, onRemove}: ITCCard) {
  return (
    <Box flex={1}>
      <Pressable onPress={onPress}>
        {({isPressed}) => {
          return (
            <Box
              paddingX={5}
              overflow="hidden"
              bg={isPressed ? 'coolGray.100' : 'white'}>
              <HStack
                alignItems="center"
                justifyContent="space-between"
                paddingY={4}>
                <HStack space={5} alignItems="center">
                  <Image
                    opacity={isPressed ? '0.6' : '1'}
                    source={defaultImg}
                    alt="image"
                    resizeMode="cover"
                    rounded="md"
                    w="32"
                    h="24"
                  />
                  <VStack space={3}>
                    <Heading size="sm" numberOfLines={2} marginBottom={'5px'}>
                      {name}
                    </Heading>
                    <HStack space={1}>
                      <BadgeList data={tags} />
                    </HStack>
                  </VStack>
                </HStack>

                <Button
                  onPress={onRemove}
                  variant="outline"
                  colorScheme="trueGray"
                  borderRadius="lg"
                  size="sm">
                  삭제
                </Button>
              </HStack>
            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
}

export default TCCard;
