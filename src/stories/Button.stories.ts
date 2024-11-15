import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../components/Button/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "Overwritten description",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Button",
    variant: "default",
  },
};

export const Outline: Story = {
  args: {
    text: "Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    text: "Button",
    variant: "ghost",
  },
};
