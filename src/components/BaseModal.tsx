import {Center, Button, Modal, Text} from 'native-base';
import React, {ReactNode, useState} from 'react';

interface BaseModalProps {
  title: string;
  children: ReactNode;

  onAction: () => void;

  open: boolean;
  onClose: () => void;
}
function BaseModal({title, children, onAction, onClose, open}: BaseModalProps) {
  const handleAction = () => {
    onAction();
    onClose();
  };

  return (
    <Center>
      <Modal isOpen={open} onClose={() => onClose()}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>
            <Text fontSize="sm" bold>
              {title}
            </Text>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button colorScheme="green" onPress={handleAction}>
                제출
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}

export default BaseModal;
