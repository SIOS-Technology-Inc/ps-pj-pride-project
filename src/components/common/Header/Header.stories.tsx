import { Header } from './Header';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    user: {
      displayName: 'John Doe',
      photoURL: 'https://randomuser.me/api/portraits',
    },
  },
};
