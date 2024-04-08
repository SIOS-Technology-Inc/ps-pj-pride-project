import { CardContent } from './CardContent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/CardContent',
  component: CardContent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: 'Primary',
    label: 'Primary',
  },
};
