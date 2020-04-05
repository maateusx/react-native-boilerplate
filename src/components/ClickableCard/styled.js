import styled from 'styled-components/native';

export const ContainerStyled = styled.TouchableOpacity`
  background-color: #ffffff;
  border-width: 0;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 3)}px;
  padding: 0px;
  width: 100%;
`;
