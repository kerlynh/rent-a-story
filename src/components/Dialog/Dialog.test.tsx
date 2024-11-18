import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomizedDialogs } from "./Dialog";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => [(key: any) => key],
}));

describe("CustomizedDialogs", () => {
  it("should show the CustomizedDialogs when button is clicked", () => {
    render(
      <CustomizedDialogs
        title="Test Title"
        description="Test Description"
        price="100"
        author="Test Author"
      />
    );

    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
