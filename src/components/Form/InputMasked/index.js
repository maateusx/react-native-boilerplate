import React from 'react';
import PropTypes from 'prop-types';
import Theme from 'style/Theme';
import * as Styled from './styled';

const InputMasked = (props) => (
  <Styled.PaperInput
    {...props}
    label={props.placeholder}
    mode="outlined"
    underlineColor={Theme.primary}
    theme={{
      colors: {
        primary: Theme.primary,
      },
    }}
    render={(inputProps) => (
      <Styled.InputMasked {...inputProps} ref={inputProps.inputRef} />
    )}
  />
);

InputMasked.defaultProps = {
  inputRef: () => null,
};

InputMasked.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputRef: PropTypes.func,
};

export default InputMasked;
