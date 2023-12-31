import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Button } from '@nvn-nil/components/src/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

//👇 Throws a type error it the args don't match the component props
export const Primary = {
  args: {
    label: 'button',
  },
};
