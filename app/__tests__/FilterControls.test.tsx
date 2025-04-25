// import React from 'react';
// import { render, screen, fireEvent } from "@testing-library/react";
// import FilterControls from "@/app/components/FilterControls";
// import "@testing-library/jest-dom";
// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";

// const mockAxios = new MockAdapter(axios);

// describe("FilterControls", () => {
//   beforeEach(() => {
//     mockAxios.reset();
//   });

//   test("should display category filter and allow changing it", async () => {
//     mockAxios.onGet("https://dummyjson.com/products/categories").reply(200, ["smartphones", "laptops"]);

//     const mockSetCategory = jest.fn();
    
//     render(
//       <FilterControls
//         category=""
//         setCategory={mockSetCategory}
//         priceRange={[0, 1000]}
//         setPriceRange={() => {}}
//       />
//     );

//     // Check if the categories are loaded
//     expect(await screen.findByText("smartphones")).toBeInTheDocument();
//     expect(await screen.findByText("laptops")).toBeInTheDocument();
    
//     // Simulate changing category
//     fireEvent.change(screen.getByRole("combobox"), {
//       target: { value: "smartphones" },
//     });
    
//     expect(mockSetCategory).toHaveBeenCalledWith("smartphones");
//   });

//   test("should adjust price range", () => {
//     const mockSetPriceRange = jest.fn();
    
//     render(
//       <FilterControls
//         category=""
//         setCategory={() => {}}
//         priceRange={[0, 1000]}
//         setPriceRange={mockSetPriceRange}
//       />
//     );

//     const sliders = screen.getAllByRole("slider");
//     fireEvent.change(sliders[0], { target: { value: 100 } });
    
//     expect(mockSetPriceRange).toHaveBeenCalled();
//   });
// });