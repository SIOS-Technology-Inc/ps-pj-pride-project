import { prideContent } from '@/constants/dummy/prideContent';

import { UserRankingCard } from './UserRankingCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/UserRankingCard',
  component: UserRankingCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserRankingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prideContent: prideContent,
    rank: 1,
  },
};
