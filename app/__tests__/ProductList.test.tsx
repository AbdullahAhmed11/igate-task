import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import ProductList from "@/app/components/ProductList";

describe("ProductList", () => {
  test("should render product list with products", () => {
    const products = [{ id: 1, title: "Product 1", price: 100, thumbnail: "image1.jpg" }];
    
    render(<ProductList products={products} />);
    
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
  });

  test("should show 'No products found' if no products are passed", () => {
    render(<ProductList products={[]} />);
    expect(screen.getByText("No products found.")).toBeInTheDocument();
  });
});
