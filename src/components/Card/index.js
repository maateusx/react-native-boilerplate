import React from 'react';
import { StyleSheet } from 'react-native';
import theme from 'style/Theme';
import { ContainerStyled } from './styled';

const styles = StyleSheet.create({
  shadow: {
    elevation: 2,
    shadowColor: theme.blackSoft,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});

const Card = ({ children, style = {} }) => (
  <ContainerStyled style={[style, styles.shadow]}>{children}</ContainerStyled>
);

export default Card;
