import { Title } from './Title';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
  },
};
