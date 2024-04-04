import { FormTukkomi } from './FormTukkomi';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/FormTukkomi',
  component: FormTukkomi,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormTukkomi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tukkomi: 'text',
  },
};
