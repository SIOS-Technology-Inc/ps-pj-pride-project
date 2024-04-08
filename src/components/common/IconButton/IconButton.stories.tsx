import { FiThumbsUp } from 'react-icons/fi';

import { IconButton } from './IconButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    disable: false,
    children: <FiThumbsUp />,
  },
};
