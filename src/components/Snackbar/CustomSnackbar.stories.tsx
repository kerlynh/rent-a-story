// src/components/CustomSnackbar.stories.tsx
import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CustomSnackbar, CustomSnackbarProps } from "./CustomSnackbar";
import { Button } from "../Button/Button";

const meta: Meta<typeof CustomSnackbar> = {
  title: "Components/Snackbar",
  component: CustomSnackbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    bgColor: { control: "color" },
    vertical: {
      options: ["top", "bottom"],
      control: { type: "radio" },
    },
    horizontal: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
    message: { control: "text" },
    success: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof CustomSnackbar>;

const SnackbarWithState = (args: CustomSnackbarProps) => {
  const [message, setMessage] = useState(args.message || null);
  const [success, setSuccess] = useState(args.success);

  return (
    <div>
      <Button
        text="Show"
        variant="default"
        onClick={() => {
          setMessage("This is a success message!");
          setSuccess(false);
        }}
      />
      <CustomSnackbar
        {...args}
        message={message}
        success={success}
        setMessage={setMessage}
        setSuccess={setSuccess}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    message: "This is a custom snackbar!",
    success: true,
    bgColor: "green",
    vertical: "top",
    horizontal: "right",
  },
  render: (args) => <SnackbarWithState {...args} />,
};

export const WithErrorMessage: Story = {
  args: {
    message: "This is an error message!",
    success: false,
    bgColor: "tomato",
    vertical: "bottom",
    horizontal: "left",
  },
  render: (args) => <SnackbarWithState {...args} />,
};
