import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { IconButton } from '@nvn-nil/components/src/IconButton';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
};

export default meta;

export const Accessible = {
  args: {
    label: 'button',
  },
};

export const Inaccessible = {
  args: {
    label: 'button',
  },
};
