import { prideContent } from '@/constants/dummy/prideContent';

import { FormLandscapePride } from './FormLandscapePride';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/FormLandscapePride',
  component: FormLandscapePride,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormLandscapePride>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prideContent: prideContent,
    openFlagState: [false, (value) => !value],
  },
};
