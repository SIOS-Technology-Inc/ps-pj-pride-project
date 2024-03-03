import { prideContent } from '@/constants/dummy/prideContent';

import { UserLandscapeDetailCard } from './UserLandscapeDetailCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/UserLandscapeDetailCard',
  component: UserLandscapeDetailCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserLandscapeDetailCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prideContent: prideContent,
    ownerFlag: false,
  },
};
