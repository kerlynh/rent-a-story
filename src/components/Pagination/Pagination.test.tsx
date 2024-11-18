import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  it("should call onPageChange when page is changed", () => {
    const onPageChangeMock = jest.fn();
    const onRowsPerPageChangeMock = jest.fn();

    render(
      <Pagination
        total={100}
        page={0}
        rowsPerPage={10}
        onPageChange={onPageChangeMock}
        onRowsPerPageChange={onRowsPerPageChangeMock}
      />
    );

    const nextButton = screen.getByLabelText("Go to next page");
    const prevButton = screen.getByLabelText("Go to previous page");

    fireEvent.click(prevButton);
    fireEvent.click(nextButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });
});
