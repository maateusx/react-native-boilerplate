import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import { TextInput } from 'react-native-paper';

export const PaperInput = styled(TextInput)`
  border-radius: 10px;
  margin-top: 10px;
  padding: 0px;
  width: 100%;
`;

export const InputMasked = styled(TextInputMask)`
  padding: 10px;
  width: 100%;
`;
