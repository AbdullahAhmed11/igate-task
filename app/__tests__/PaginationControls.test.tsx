import { render, screen, fireEvent } from "@testing-library/react";
import PaginationControls from "@/app/components/PaginationControls";

describe("PaginationControls", () => {
  test("should render pagination and change pages", () => {
    render(
      <PaginationControls
        currentPage={1}
        setCurrentPage={() => {}}
        totalProducts={100}
        productsPerPage={10}
      />
    );

    const pagination = screen.getByRole("navigation");
    expect(pagination).toBeInTheDocument();

    fireEvent.click(screen.getByText("2"));
  });
});
