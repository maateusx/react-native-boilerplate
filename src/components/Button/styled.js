import styled from 'styled-components';
import { Button } from 'react-native-elements';

export const ButtonStyled = styled(Button).attrs(
  ({ backgroundColor, color, buttonStyle, titleStyle }) => ({
    buttonStyle: {
      backgroundColor,
      borderRadius: 5,
      ...buttonStyle,
    },
    titleStyle: {
      color,
      ...titleStyle,
    },
  }),
)``;
