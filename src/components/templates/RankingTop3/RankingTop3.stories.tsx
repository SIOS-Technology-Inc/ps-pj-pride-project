import { prideContent } from '@/constants/dummy/prideContent';

import { RankingTop3 } from './RankingTop3';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'templates/RankingTop3',
  component: RankingTop3,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RankingTop3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prides: [prideContent, prideContent, prideContent],
  },
};
