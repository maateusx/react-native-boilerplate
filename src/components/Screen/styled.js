import styled from 'styled-components/native';

export const ContainerStyled = styled.View`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 100%;
`;

export const ScrollContainerStyled = styled.ScrollView`
  flex: 1;
`;
