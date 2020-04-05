import styled from 'styled-components/native';

export const ModalWrapper = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Container = styled.TouchableWithoutFeedback`
  align-items: center;
  flex: 1;
  justify-content: center;
  margin: 5%;
`;
