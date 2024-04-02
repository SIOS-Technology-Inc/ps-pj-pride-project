import { TimerButton } from './TimerButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/TimerButton',
  component: TimerButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TimerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'blue',
    disabled: false,
    label: 'start',
  },
};
