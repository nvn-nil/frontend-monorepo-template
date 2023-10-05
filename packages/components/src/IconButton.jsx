import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const IconButton = forwardRef(({ disabled, loading, ...rest }, ref) => {
  return (
    <button ref={ref} {...rest} disabled={disabled || loading}>
      {rest.children}
    </button>
  );
});

IconButton.displayName = 'Button';
IconButton.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default IconButton;
