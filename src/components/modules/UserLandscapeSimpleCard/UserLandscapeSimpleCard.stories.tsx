import { prideContent } from '@/constants/dummy/prideContent';

import { UserLandscapeSimpleCard } from './UserLandscapeSimpleCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/UserLandscapeSimpleCard',
  component: UserLandscapeSimpleCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserLandscapeSimpleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prideContent: prideContent,
    ownerFlag: false,
  },
};
