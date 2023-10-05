import { forwardRef } from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  disabled?: boolean; // disabled is include in button componentProps but redefined here so storybook picks it up
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return <button ref={ref} {...rest} disabled={disabled || loading} />;
  },
);

Button.displayName = 'Button';

export default Button;
