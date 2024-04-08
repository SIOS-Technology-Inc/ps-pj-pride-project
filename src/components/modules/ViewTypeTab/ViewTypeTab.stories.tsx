import { ViewTabStyle } from '@/constants/ViewTabStyle';

import { ViewTypeTab } from './ViewTypeTab';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/ViewTypeTab',
  component: ViewTypeTab,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ViewTypeTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    select: 'simple',
    onClick: (value: keyof typeof ViewTabStyle) => console.log(value),
  },
};
