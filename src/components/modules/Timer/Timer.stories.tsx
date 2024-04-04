import { Timer } from "./Timer";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/Timer",
    component: Timer,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
