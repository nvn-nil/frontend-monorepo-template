import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const IconButton = forwardRef(
  ({ disabled, loading, label, ...rest }, ref) => {
    return (
      <button ref={ref} {...rest} disabled={disabled || loading}>
        {label}
      </button>
    );
  },
);

IconButton.displayName = 'Button';
IconButton.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default IconButton;
