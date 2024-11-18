import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";
import { getInitialName } from "../../utils/name";
import "@testing-library/jest-dom";

jest.mock("../../utils/name", () => ({
  getInitialName: jest.fn(),
}));

describe("Avatar component", () => {
  it("should render the initials of the username", () => {
    const mockInitials = "JD";
    (getInitialName as jest.Mock).mockReturnValue(mockInitials);
    const userName = "John Doe";

    render(<Avatar userName={userName} />);

    expect(getInitialName).toHaveBeenCalledWith(userName);

    const initials = screen.getByText(mockInitials);
    expect(initials).toBeInTheDocument();
  });
});
