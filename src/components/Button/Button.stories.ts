import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
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
};

export default meta;
type Story = StoryObj<typeof Button>;

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
