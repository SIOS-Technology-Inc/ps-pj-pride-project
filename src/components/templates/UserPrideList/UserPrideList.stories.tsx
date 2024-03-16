import { prideContent } from '@/constants/dummy/prideContent';

import { UserPrideList } from './UserPrideList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'object/UserPrideList',
  component: UserPrideList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserPrideList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prides: [prideContent, prideContent, prideContent],
  },
};
