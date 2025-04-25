
import { Slider, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  category: string;
  setCategory: (value: string) => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
}

export default function FilterControls({
  category,
  setCategory,
  priceRange,
  setPriceRange,
}: Props) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter Products</h2>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Category Select */}
        <FormControl className="w-full md:w-1/3">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-50 rounded-lg border border-gray-300"
          >
            <MenuItem value="">All</MenuItem>
            {categories.map((cat) => {
              const value = typeof cat === "string" ? cat : (cat as { name: string }).name;
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        {/* Price Range Slider */}
        <div className="w-full md:w-2/3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range (${priceRange[0]} - ${priceRange[1]})</label>
          <Slider
            value={priceRange}
            onChange={(_, value) => setPriceRange(value as [number, number])}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            valueLabelFormat={(value) => `$${value}`}
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
