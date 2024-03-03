import { prideContent } from '@/constants/dummy/prideContent';

import { UserCard } from './UserCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prideContent: prideContent,
  },
};
