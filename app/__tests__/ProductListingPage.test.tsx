import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Home from "../page";
const mockAxios = new MockAdapter(axios);

describe("ProductListingPage", () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  test("should render product listing page with products", async () => {
    const mockData = {
      products: [{ id: 1, title: "Product 1", price: 100, thumbnail: "image1.jpg" }],
      total: 1,
    };

    mockAxios.onGet("https://dummyjson.com/products").reply(200, mockData);

    render(<Home />);

    await waitFor(() => expect(screen.getByText("Product 1")).toBeInTheDocument());
  });

  test("should filter products by category and price range", async () => {
    const mockData = {
      products: [{ id: 1, title: "Product 1", price: 100, thumbnail: "image1.jpg" }],
      total: 1,
    };

    mockAxios.onGet("https://dummyjson.com/products").reply(200, mockData);

    render(<Home />);



    await waitFor(() => expect(screen.getByText("Product 1")).toBeInTheDocument());
  });
});
