import { prideContent } from '@/constants/dummy/prideContent';

import { ThumbsUpList } from './ThumbsUpList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'templates/ThumbsUpList',
  component: ThumbsUpList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ThumbsUpList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prides: [prideContent, prideContent, prideContent],
    photoURL: 'https://example.com',
    userID: '1',
  },
};
