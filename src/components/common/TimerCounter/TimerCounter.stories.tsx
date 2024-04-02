import { TimerCounter } from './TimerCounter';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/TimerCounter',
  component: TimerCounter,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TimerCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    time: 0,
  },
};
