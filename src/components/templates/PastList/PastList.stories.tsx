import { prideContent } from '@/constants/dummy/prideContent';

import { PastList } from './PastList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'templates/PastList',
  component: PastList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PastList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prides: [prideContent, prideContent, prideContent],
  },
};
