import React from 'react';
import PropTypes from 'prop-types';
import theme from 'style/Theme';
import { ButtonStyled } from './styled';

const Button = (props) => {
  const {
    backgroundColor,
    color,
    buttonStyle,
    titleStyle,
    title,
    disabled,
    icon,
    loading,
    type,
    onPress,
  } = props;

  return (
    <ButtonStyled
      backgroundColor={backgroundColor}
      color={color}
      title={title}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      type={type}
      disabled={disabled}
      onPress={onPress}
      loading={loading}
      icon={icon}
      {...props}
    />
  );
};

Button.defaultProps = {
  backgroundColor: 'transparent',
  color: theme.primary,
  type: 'clear',
  title: '',
  disabled: false,
  loading: false,
  icon: null,
  titleStyle: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginVertical: 0,
  },
  buttonStyle: {},
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.node,
  type: PropTypes.oneOf(['clear', 'solid', 'outline']),
  titleStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
};

export default Button;
