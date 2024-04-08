import { useForm } from 'react-hook-form';

import { FormInputTextArea } from './FormInputTextArea';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/FormInputTextArea',
  component: FormInputTextArea,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormInputTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    validation: '10',
    name: 'data',
  },
  render: function Comp(args) {
    const { control } = useForm<{ data: string }>({
      defaultValues: {
        data: '',
      },
    });
    return <meta.component {...args} control={control} rules={{}} name="data" />;
  },
};
