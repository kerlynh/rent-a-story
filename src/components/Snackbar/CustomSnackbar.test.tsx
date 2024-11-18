import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomSnackbar } from "./CustomSnackbar";
import "../../i18n";

describe("CustomSnackbar component", () => {
  const mockedProps = {
    message: "Test",
    success: false,
    setMessage: jest.fn(),
    setSuccess: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  it("should render the snackbar with message when success is false", () => {
    render(<CustomSnackbar {...mockedProps} />);

    const message = screen.getByText("Test");
    expect(message).toBeInTheDocument();
  });

  it("should not render the snackbar when message is null", () => {
    render(<CustomSnackbar {...mockedProps} message={null} />);

    const snackbarMessage = screen.queryByText("Test");
    expect(snackbarMessage).not.toBeInTheDocument();
  });

  it("should not render the snackbar when success is true", () => {
    render(<CustomSnackbar {...mockedProps} success={true} />);

    const snackbarMessage = screen.queryByText("Test");
    expect(snackbarMessage).not.toBeInTheDocument();
  });

  it("should call setMessage and setSuccess when close button is clicked", async () => {
    render(<CustomSnackbar {...mockedProps} />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(mockedProps.setSuccess).toHaveBeenCalledWith(false);
      expect(mockedProps.setMessage).toHaveBeenCalledWith(null);
    });
  });
});
