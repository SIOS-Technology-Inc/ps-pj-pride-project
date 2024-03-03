import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'default',
    label: 'Primary',
  },
};
