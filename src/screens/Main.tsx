import React from 'react';
import {
  NativeBaseProvider,
  Box,
  AspectRatio,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from 'native-base';

type Props = {};

function Main() {
  return (
    <NativeBaseProvider>
      <Box w="100%" p={5} alignContent="center">
        <VStack justifyContent="space-evenly" space={5}>
          <Box h="25%" w="100%" bg="primary.300" rounded="md" shadow={3} />

          <HStack w="100%" space={5} h="30%">
            <Box flex={1} bg="primary.300" rounded="md" shadow={3} />
            <Box flex={1} bg="primary.300" rounded="md" shadow={3} />
          </HStack>
          <Box minH="19%" w="100%" bg="primary.300" rounded="md" shadow={3} />
          <HStack space={5} justifyContent="center" h="14%">
            <Box
              minH="100%"
              w="100%"
              bg="primary.300"
              rounded="md"
              shadow={3}
            />
            <Box
              minH="100%"
              w="100%"
              bg="primary.300"
              rounded="md"
              shadow={3}
            />
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

const Example = () => {
  return (
    <Box alignItems="center">
      <Box
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};
function Example2() {
  return (
    <HStack space={2} justifyContent="center">
      <Box minH="40" w="100%" bg="primary.300" rounded="md" shadow={3} />
      <Box minH="30%" w="100%" bg="primary.300" rounded="md" shadow={3} />
    </HStack>
  );
}
const NBBox = props => {
  return <Box borderRadius="md" bg="primary.600" {...props} />;
};

function Component() {
  return (
    <>
      {/* m="2" refers to the value of `theme.space[2]` */}
      <NBBox m="2" p="5" />
      {/* You can also use custom values */}
      <NBBox mx="auto" px="20" py="5" />
      {/* sets margin `8px` on all viewports and `16px` from the first breakpoint and up */}
      <NBBox m={[2, 3]} pt="10" pr="10" />
    </>
  );
}

function Example3() {
  return (
    <NativeBaseProvider>
      <Component />
    </NativeBaseProvider>
  );
}
export default Main;
