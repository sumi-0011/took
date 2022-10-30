import {Button, Text} from 'native-base';
import React from 'react';

interface TookButtonProps {
  name: string;
  onPress: () => void;
  isDisabled?: boolean;
}

function TookButton({name, onPress, isDisabled}: TookButtonProps) {
  return (
    <Button
      padding="5"
      margin={4}
      colorScheme="green"
      variant="light"
      onPress={onPress}
      borderRadius="xl"
      isDisabled={isDisabled}>
      <Text color="white" fontSize="16px" bold>
        {name}
      </Text>
    </Button>
  );
}

export default TookButton;
