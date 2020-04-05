import styled, { css } from 'styled-components/native';

const Text = styled.Text`
  font-family: Avenir;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ size }) => (size ? size : 14)};
  text-align: ${({ align }) => align || 'left'};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export default Text;
