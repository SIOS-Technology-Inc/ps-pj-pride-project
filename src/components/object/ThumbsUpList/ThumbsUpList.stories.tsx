import { prideContent } from '@/constants/dummy/prideContent';

import { ThumbsUpList } from './ThumbsUpList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'object/ThumbsUpList',
  component: ThumbsUpList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ThumbsUpList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prides: [
      { pride: prideContent, uid: '1' },
      { pride: prideContent, uid: '1' },
      { pride: prideContent, uid: '1' },
    ],
    photoURL: 'https://example.com',
    userID: '1',
  },
};
