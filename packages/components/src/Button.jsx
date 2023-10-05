import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { tokens } from '@nvn-nil/core';

export const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 6px 12px;
  background-color: ${tokens.colors.primary.main.value};
`;

export const Button = forwardRef(
  ({ disabled, loading, label, ...rest }, ref) => {
    return (
      <ButtonStyled ref={ref} {...rest} disabled={disabled || loading}>
        {label}
      </ButtonStyled>
    );
  },
);

Button.displayName = 'Button';
Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default Button;
