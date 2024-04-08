import { Menu } from './Menu';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: [<div>Menu</div>, <div>Menu</div>],
  },
};
