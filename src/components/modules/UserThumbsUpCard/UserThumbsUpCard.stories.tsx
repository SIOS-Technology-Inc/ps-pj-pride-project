import { prideContent } from '@/constants/dummy/prideContent';

import { UserThumbsUpCard } from './UserThumbsUpCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/UserThumbsUpCard',
  component: UserThumbsUpCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserThumbsUpCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ownerFlag: false,
    prideContent: prideContent,
  },
};
