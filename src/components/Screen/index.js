import PropTypes from 'prop-types';
import React from 'react';
import theme from 'style/Theme';
import { ContainerStyled, ScrollContainerStyled } from './styled';

const styles = {
  container: {
    flexGrow: 1,
  },
};

const Screen = ({
  backgroundColor,
  children,
  keyboardShouldPersistTaps,
  noScroll,
}) => {
  return (
    <ContainerStyled backgroundColor={backgroundColor}>
      {noScroll ? (
        children
      ) : (
        <ScrollContainerStyled
          contentContainerStyle={styles.container}
          bounces={false}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}>
          {children}
        </ScrollContainerStyled>
      )}
    </ContainerStyled>
  );
};

Screen.defaultProps = {
  backgroundColor: theme.background,
  noScroll: false,
};

Screen.propTypes = {
  backgroundColor: PropTypes.string,
  noScroll: PropTypes.bool,
};

export default Screen;
