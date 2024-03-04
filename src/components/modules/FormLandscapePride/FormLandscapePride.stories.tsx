import { useState } from 'react';

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
  render: function Comp(args) {
    const flag = useState(true);
    const [, setOpenFlag] = flag;
    return (
      <>
        <div style={{ width: '100wh', height: '100vh', position: 'relative' }}>
          <button onClick={() => setOpenFlag((value) => !value)}>open</button>
          <FormLandscapePride {...args} openFlagState={flag} />
        </div>
      </>
    );
  },
};
