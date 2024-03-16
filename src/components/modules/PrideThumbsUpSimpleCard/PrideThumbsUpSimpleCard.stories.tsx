import { prideContent } from '@/constants/dummy/prideContent';

import { PrideThumbsUpSimpleCard } from './PrideThumbsUpSimpleCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/PrideThumbsUpSimpleCard',
  component: PrideThumbsUpSimpleCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PrideThumbsUpSimpleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prideContent: prideContent,
    ownerFlag: false,
  },
};
