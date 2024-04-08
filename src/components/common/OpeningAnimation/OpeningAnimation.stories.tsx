import { OpeningAnimation } from "./OpeningAnimation";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "common/OpeningAnimation",
    component: OpeningAnimation,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof OpeningAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
