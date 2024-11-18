import { Meta, StoryObj } from "@storybook/react";
import { CustomizedDialogs } from "./Dialog";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

const meta: Meta<typeof CustomizedDialogs> = {
  title: "Components/Dialogs",
  component: CustomizedDialogs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </MemoryRouter>
    ),
  ],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
