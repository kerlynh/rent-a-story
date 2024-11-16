import { render, screen } from "@testing-library/react";
import { Select } from "./Select";

describe("Select component", () => {
  it("should render something", () => {
    render(<Select />);
    const select = screen.getByTestId("select");
    expect(select).toBeInTheDocument();
  });
});
