import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rating: { control: "number", min: 0, max: 5, step: 0.1 },
    availability: { control: "boolean" },
    genre: { control: Array },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: "John Doe",
    rating: 4.5,
    availability: true,
    title: "Book Title",
    description: "This is a description of the book.",
    genre: ["Fiction", "Mystery"],
  },
};

export const NoAvailability: Story = {
  args: {
    author: "Jane Smith",
    rating: 3.8,
    availability: false,
    title: "Unavailable Book",
    description: "This book is currently unavailable.",
    genre: ["Non-fiction", "Science"],
  },
};

export const CustomRating: Story = {
  args: {
    author: "Mark Twain",
    rating: 2.5,
    availability: true,
    title: "Mark Twain Book",
    description: "This is a description of the Mark Twain book.",
    genre: ["Classic"],
  },
};
