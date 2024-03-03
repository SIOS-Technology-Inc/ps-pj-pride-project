import { Footer } from "./Footer";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "common/Footer",
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
