import { prideContent } from '@/constants/dummy/prideContent';

import { UserLandscapeCard } from './UserLandscapeCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/UserLandscapeCard',
  component: UserLandscapeCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserLandscapeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prideContent: prideContent,
    ownerFlag: false,
    design: 'detail',
  },
};
