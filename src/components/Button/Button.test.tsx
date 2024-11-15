import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button component", () => {
  test("renders button with text", () => {
    render(<Button text="Click Me" variant="default" onClick={() => {}} />);
    expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
  });

  test("renders button with color", () => {
    const { container } = render(
      <Button
        text="Click Me"
        variant="default"
        color="secondary"
        onClick={() => {}}
      />
    );
    expect(container.firstChild).toHaveClass("bg-secondary");
    expect(container.firstChild).not.toHaveClass("border-secondary");
  });

  test("renders button with outline variant", () => {
    const { container } = render(
      <Button text="Click Me" variant="outline" onClick={() => {}} />
    );
    expect(container.firstChild).toHaveClass("border-primary");
    expect(container.firstChild).not.toHaveClass("bg-primary");
  });

  test("renders button with ghost variant", () => {
    const { container } = render(
      <Button text="Click Me" variant="ghost" onClick={() => {}} />
    );
    expect(container.firstChild).not.toHaveClass("bg-primary/80");
    expect(container.firstChild).not.toHaveClass("border border-primary");
  });

  test("renders button with only icon", () => {
    render(
      <Button
        text="Click Me"
        variant="default"
        icon="Search"
        iconPosition="only"
        onClick={() => {}}
      />
    );

    const icon = screen.getByTestId("only-Search");
    expect(icon).toBeInTheDocument();
  });

  test("renders button with icon on left side", () => {
    render(
      <Button
        text="Click Me"
        variant="default"
        icon="Search"
        iconPosition="left"
        onClick={() => {}}
      />
    );
    const icon = screen.getByTestId("left-Search");
    expect(icon).toBeInTheDocument();
  });

  test("renders button with icon on right side", () => {
    render(
      <Button
        text="Click Me"
        variant="default"
        icon="Search"
        iconPosition="right"
        onClick={() => {}}
      />
    );

    const icon = screen.getByTestId("right-Search");
    expect(icon).toBeInTheDocument();
  });

  test("does not render icon when not provided", () => {
    render(<Button text="Click Me" variant="default" onClick={() => {}} />);

    expect(screen.getByTestId("button").querySelector("svg")).toBeNull();
  });

  test("does not render icon when not provided", () => {
    render(<Button text="Click Me" variant="default" onClick={() => {}} />);

    expect(screen.getByTestId("button").querySelector("svg")).toBeNull();
  });

  test("deve chamar a função onClick quando o botão for clicado", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button text="Click" variant="default" onClick={mockOnClick} />
    );

    fireEvent.click(getByText("Click"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
