import React from 'react';
import PropTypes from 'prop-types';
import Theme from 'style/Theme';
import * as Styled from './styled';

const Input = (props) => (
  <Styled.PaperInput
    {...props}
    label={props.placeholder}
    ref={props.inputRef}
    mode="outlined"
    underlineColor={Theme.primary}
    theme={{
      colors: {
        primary: Theme.primary,
      },
    }}
  />
);

Input.defaultProps = {
  inputRef: () => null,
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputRef: PropTypes.func,
};

export default Input;
