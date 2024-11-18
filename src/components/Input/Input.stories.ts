import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import * as MuiIcons from "@mui/icons-material";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    icon: {
      options: Object.keys(MuiIcons),
      control: { type: "select" },
    },
    iconPosition: {
      options: ["left", "right", "both"],
      control: { type: "radio" },
    },
    onChange: { action: "changed" },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Your Name",
    value: "",
    onChange: (value: string) => console.log(value),
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Search",
    value: "",
    icon: "Search",
    iconPosition: "left",
    onChange: (value: string) => console.log(value),
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Password",
    value: "",
    icon: "Lock",
    iconPosition: "right",
    onChange: (value: string) => console.log(value),
  },
};

export const WithBothIcons: Story = {
  args: {
    label: "Username",
    value: "",
    icon: "Search",
    iconPosition: "both",
    onChange: (value: string) => console.log(value),
    onClick: () => console.log("Close clicked"),
  },
};
