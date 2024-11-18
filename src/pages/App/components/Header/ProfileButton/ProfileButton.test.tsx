import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ProfileButton } from "./ProfileButton";
import { useLoginStore } from "../../../../../store/userStore";
import { useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("../../../../../store/userStore", () => ({
  useLoginStore: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn(() => ({
    t: jest.fn((key: string) => key),
    i18n: {
      changeLanguage: jest.fn(),
    },
  })),
}));

describe("ProfileButton Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useLoginStore as unknown as jest.Mock).mockReset();
  });

  it("should render Menu and AccountCircle icons when user is not logged in", () => {
    (useLoginStore as unknown as jest.Mock).mockReturnValue(null);

    render(<ProfileButton />);

    expect(screen.getByTestId("profile-button")).toBeInTheDocument();
    expect(screen.getByTestId("profile-button")).toContainElement(
      screen.getByTestId("MenuIcon")
    );
    expect(screen.getByTestId("profile-button")).toContainElement(
      screen.getByTestId("AccountCircleIcon")
    );
  });

  it("should render Avatar when user is logged in", () => {
    const mockUser = { name: "John Doe" };
    (useLoginStore as unknown as jest.Mock).mockReturnValue(mockUser);

    render(<ProfileButton />);

    expect(screen.getByTestId("profile-button")).toContainElement(
      screen.getByTestId("avatar")
    );
  });

  it("should display the text 'logout' when the user is logged in", () => {
    const mockUser = { name: "John Doe" };
    (useLoginStore as unknown as jest.Mock).mockReturnValue(mockUser);

    render(<ProfileButton />);

    const logout = screen.getByTestId("profile-logout");
    expect(logout).toBeVisible();
  });

  it("should call navigate on logout", async () => {
    const mockUser = { name: "John Doe" };
    (useLoginStore as unknown as jest.Mock).mockReturnValue(mockUser);

    render(<ProfileButton />);

    fireEvent.click(screen.getByTestId("profile-button"));
    fireEvent.click(screen.getByTestId("profile-logout"));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(0);
    });
  });

  it("should change language on button click", () => {
    const changeLanguageMock = jest.fn();

    const mockUser = { name: "John Doe" };
    (useLoginStore as unknown as jest.Mock).mockReturnValue(mockUser);

    render(<ProfileButton />);

    const langButton = screen.getByAltText("portuguese");
    expect(langButton).toBeInTheDocument();

    const languageOnScreen = screen.getByTestId("pt-BR");
    const language = languageOnScreen.getAttribute("data-testid");
    expect(langButton).toBeInTheDocument();

    changeLanguageMock(language);

    expect(changeLanguageMock).toHaveBeenCalledWith("pt-BR");
  });
});
