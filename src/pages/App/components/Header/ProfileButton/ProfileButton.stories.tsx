import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { ProfileButton } from "./ProfileButton";
import { useLoginStore } from "../../../../../store/userStore";
import { useEffect } from "react";

const meta: Meta<typeof ProfileButton> = {
  title: "Components/ProfileButton",
  component: ProfileButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ProfileButton>;

const ProfileButtonState = ({ args }: any) => {
  const { setUserData } = useLoginStore((state) => state);
  const user = {
    name: "Jessica Jones",
    username: "jessica_jones",
    password: "123",
  };

  useEffect(() => {
    if (args) setUserData(user);
    else setUserData(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [args]);

  return <ProfileButton />;
};

export const LoggedOut: Story = {
  render: () => <ProfileButtonState />,
};

export const LoggedIn: Story = {
  render: () => <ProfileButtonState args={true} />,
};
