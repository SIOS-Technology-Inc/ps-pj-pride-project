import { Notice } from './Notice';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/Notice',
  component: Notice,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Notice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'This is a notice',
  },
};
