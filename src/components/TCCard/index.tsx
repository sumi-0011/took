import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import defaultImg from '@images/defaultImg.png';
import BadgeList from '@components/BadgeList';
import {RemoveIcon} from '@components/Icon';

interface ITCCard {
  title: string;
  category: string[];
  imageUrl: string;
  id: number;
  onPress?: () => void;
  onRemove: (id: number) => void;
}

function TCCard({title, category, imageUrl, id, onPress, onRemove}: ITCCard) {
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
                      {title}
                    </Heading>
                    <HStack space={1}>
                      <BadgeList data={category} />
                    </HStack>
                  </VStack>
                </HStack>

                <Button
                  onPress={() => onRemove(id)}
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
