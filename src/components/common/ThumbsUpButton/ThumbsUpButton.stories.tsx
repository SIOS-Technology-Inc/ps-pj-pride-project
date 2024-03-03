import { ThumbsUpButton } from './ThumbsUpButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/ThumbsUpButton',
  component: ThumbsUpButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ThumbsUpButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disable: false,
  },
};
