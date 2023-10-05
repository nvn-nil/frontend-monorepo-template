import { forwardRef } from 'react';

interface IconButtonProps extends React.ComponentProps<'button'> {
  disabled?: boolean;
  loading?: boolean;
  'aria-label'?: string; // Aria title should be mandatory for icon buttons, for accesibility
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button ref={ref} {...rest} disabled={disabled || loading}>
        {rest.children}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
