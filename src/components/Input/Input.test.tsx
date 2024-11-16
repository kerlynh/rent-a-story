import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./Input";

describe("Input component", () => {
  it("should render the input field with the correct label", () => {
    render(<Input label="Search a book" value="" onChange={() => {}} />);

    const input = screen.getByPlaceholderText("Search a book");
    expect(input).toBeInTheDocument();
  });

  it("should render the left icon when iconPosition is left", () => {
    render(
      <Input
        label="Search"
        icon="Search"
        iconPosition="left"
        value=""
        onChange={() => {}}
      />
    );

    const icon = screen.getByTestId("left-Search");
    expect(icon).toBeInTheDocument();
  });

  it("should render the right icon when iconPosition is right", () => {
    render(
      <Input
        label="Search"
        icon="Search"
        iconPosition="right"
        value=""
        onChange={() => {}}
      />
    );

    const icon = screen.getByTestId("right-Search");
    expect(icon).toBeInTheDocument();
  });

  it("should render both left and right icons when iconPosition is both", () => {
    render(
      <Input
        label="Search"
        icon="Search"
        iconPosition="both"
        value="Hi"
        onChange={() => {}}
      />
    );

    const leftIcon = screen.getByTestId("left-Search");
    const rightIcon = screen.getByTestId("right-Close");
    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).toBeInTheDocument();
  });

  it("should call onChange when input value changes", () => {
    const onChange = jest.fn();

    render(<Input label="Search" value="" onChange={onChange} />);

    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "book" } });

    expect(onChange).toHaveBeenCalledWith("book");
  });

  it("should render the Close icon when iconPosition is both and input has value", () => {
    render(
      <Input
        label="Search"
        icon="Search"
        iconPosition="both"
        value="Hi"
        onChange={() => {}}
      />
    );

    const closeIcon = screen.getByTestId("right-Close");
    expect(closeIcon).toBeInTheDocument();
  });

  it("should call onClick when the Close icon is clicked", () => {
    const onClick = jest.fn();
    render(
      <Input
        label="Search"
        icon="Search"
        iconPosition="both"
        value="Test"
        onChange={() => {}}
        onClick={onClick}
      />
    );

    const closeIcon = screen.getByTestId("right-Close");
    fireEvent.click(closeIcon);

    expect(onClick).toHaveBeenCalled();
  });
});
