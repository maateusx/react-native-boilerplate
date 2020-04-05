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

const ClickableCard = ({ children, onPress, borderRadius }) => (
  <ContainerStyled
    onPress={onPress}
    activeOpacity={0.7}
    style={styles.shadow}
    borderRadius={borderRadius}>
    {children}
  </ContainerStyled>
);

export default ClickableCard;
