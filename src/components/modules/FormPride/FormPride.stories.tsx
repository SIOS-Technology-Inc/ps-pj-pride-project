import { prideContent } from '@/constants/dummy/prideContent';

import { FormPride } from './FormPride';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/FormPride',
  component: FormPride,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormPride>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prideContent: prideContent,
  },
};
