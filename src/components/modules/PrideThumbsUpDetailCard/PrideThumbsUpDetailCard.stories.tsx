import { prideContent } from '@/constants/dummy/prideContent';

import { PrideThumbsUpDetailCard } from './PrideThumbsUpDetailCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/PrideThumbsUpDetailCard',
  component: PrideThumbsUpDetailCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PrideThumbsUpDetailCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prideContent: prideContent,
    ownerFlag: false,
  },
};
