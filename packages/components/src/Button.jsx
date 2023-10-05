import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const Button = forwardRef(
  ({ disabled, loading, label, ...rest }, ref) => {
    return (
      <button ref={ref} {...rest} disabled={disabled || loading}>
        {label}
      </button>
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
