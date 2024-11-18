import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    userName: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: "Sweet Dreams",
  },
};
