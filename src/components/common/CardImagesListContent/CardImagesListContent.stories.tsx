import { CardImagesListContent } from './CardImagesListContent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/CardImagesListContent',
  component: CardImagesListContent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardImagesListContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    contents: [],
    label: 'Primary',
  },
};
