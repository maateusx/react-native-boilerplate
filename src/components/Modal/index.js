import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal as RNmodal } from 'react-native';
import * as Styled from './styled';

const Modal = forwardRef(({ children }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    close() {
      setOpen(false);
    },
    open() {
      setOpen(true);
    },
  }));

  const openModal = () => {
    setOpen(true);
  };

  return (
    <RNmodal
      visible={open}
      animationType="fade"
      onRequestClose={() => setOpen(false)}
      transparent>
      <Styled.ModalWrapper onPress={() => setOpen(false)} activeOpacity={1} />
      <Styled.Container>{children}</Styled.Container>
    </RNmodal>
  );
});

export default Modal;
