import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./Card";
import "@testing-library/jest-dom";
import "../../i18n";
import { MemoryRouter } from "react-router-dom";

describe("Card component", () => {
  const mockProps = {
    author: "John Doe",
    rating: 4.5,
    availability: true,
    title: "Book Title",
    description: "This is a description of the book.",
    genre: ["Fiction", "Mystery"],
    price: "5,00",
  };

  const routerFuture = {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
  };

  it("renders the card with the correct title", () => {
    render(
      <MemoryRouter future={routerFuture}>
        <Card {...mockProps} />
      </MemoryRouter>
    );
    expect(screen.getByText("Book Title")).toBeInTheDocument();
  });

  it("shows description on hover", () => {
    render(
      <MemoryRouter future={routerFuture}>
        <Card {...mockProps} />
      </MemoryRouter>
    );

    expect(screen.getByText("Book Title")).toBeInTheDocument();
    fireEvent.mouseEnter(screen.getByTestId("card-book"));

    expect(screen.getByText("Sinopse")).toBeInTheDocument();
    expect(
      screen.getByText("This is a description of the book.")
    ).toBeInTheDocument();
    expect(screen.getByText("Gênero")).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByTestId("card-book"));

    expect(screen.getByText("Book Title")).toBeInTheDocument();
  });

  it("does not show the morerIcon button when availability is false", () => {
    const props = { ...mockProps, availability: false };
    render(
      <MemoryRouter future={routerFuture}>
        <Card {...props} />
      </MemoryRouter>
    );

    const card = screen.getByTestId("card-book");
    fireEvent.mouseEnter(card);

    const button = screen.queryByTestId("details-button");
    expect(button).toBeNull();
  });
});
