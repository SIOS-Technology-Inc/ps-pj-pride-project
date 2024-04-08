import { prideContent } from '@/constants/dummy/prideContent';

import { PrideRankingCard } from './PrideRankingCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/PrideRankingCard',
  component: PrideRankingCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PrideRankingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prideContent: prideContent,
    rank: 1,
  },
};
