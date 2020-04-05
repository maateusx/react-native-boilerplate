import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  height: ${() => Dimensions.get('screen').height}px;
  justify-content: center;
  position: absolute;
  width: ${() => Dimensions.get('screen').width}px;
`;
