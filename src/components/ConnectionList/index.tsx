import React, {forwardRef, memo, useCallback, useEffect, useState} from 'react';
import {FlatList, FlatListProps, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {ITCInfo} from '@common/types/TCInfo';
import TCCard from '@components/TCCard';

export const AnimatedFlatList: typeof FlatList =
  Animated.createAnimatedComponent(FlatList);

type Props = Omit<FlatListProps<ITCInfo>, 'renderItem'>;

const ConnectionList = forwardRef<FlatList, Props>(({data, ...rest}, ref) => {
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const [elements, setElements] = useState(data);

  const handleRemove = useCallback(
    (id: number) => {
      setElements(elements?.filter(element => element.id !== id));
    },
    [elements],
  );

  const renderItem = useCallback(
    ({item}) => (
      <TCCard
        title={item.title}
        category={item.category}
        imageUrl={item.imageUrl}
        id={item.id}
        onPress={() => console.log('clicked')}
        onRemove={handleRemove}
      />
    ),
    [handleRemove],
  );

  return (
    <AnimatedFlatList
      ref={ref}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      initialNumToRender={6}
      maxToRenderPerBatch={6}
      windowSize={12}
      removeClippedSubviews={true}
      data={elements}
      {...rest}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default memo(ConnectionList);
