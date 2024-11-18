import { Meta, StoryObj } from "@storybook/react";
import Pagination, { PaginationProps } from "./Pagination";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    total: { control: "number" },
    page: { control: "number" },
    rowsPerPage: { control: "number" },
    className: { control: "text" },
    onPageChange: { action: "clicked" },
    onRowsPerPageChange: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const PaginationState = (args: PaginationProps) => {
  const [page, setPage] = useState(args.page);
  const [limit, setLimit] = useState(args.rowsPerPage);

  return (
    <Pagination
      {...args}
      page={page}
      rowsPerPage={limit}
      onPageChange={(v) => setPage(v)}
      onRowsPerPageChange={(v) => setLimit(v)}
    />
  );
};

export const Default: Story = {
  args: {
    total: 100,
    page: 0,
    rowsPerPage: 10,
  },
  render: (args) => <PaginationState {...args} />,
};
