import {useRef} from 'react';
import {FlatList} from 'react-native';
import {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

export const useScrollFlatList = () => {
  const ref = useRef<FlatList>(null);
  const scrollValue = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler(
    event => (scrollValue.value = event.contentOffset.y),
  );

  return {ref, scrollValue, onScroll};
};
