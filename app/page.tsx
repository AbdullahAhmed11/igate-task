'use client';
import { useEffect, useState } from "react";
import Head from "next/head";
import FilterControls from "@/app/components/FilterControls";
import ProductList from "@/app/components/ProductList";
import PaginationControls from "@/app/components/PaginationControls";
import { fetchProducts, fetchCategories } from "@/app/utils/api";

const PRODUCTS_PER_PAGE = 10;
type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [categories, setCategories] = useState<string[]>([]);

  const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const fetchAllData = async () => {
    try {
      const { products, total } = await fetchProducts(category, skip, PRODUCTS_PER_PAGE, priceRange);
      setProducts(products);
      setTotalProducts(total);

      const categoriesList = await fetchCategories();
      setCategories(categoriesList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllData();
    console.log(categories,"Fetching products and categories...");
  }, [category, priceRange, currentPage]);

  return (
    <>
      <Head>
        <title>Product Listing - E-commerce</title>
        <meta name="description" content="Browse our wide selection of products." />
        <meta name="keywords" content="e-commerce, products, shop, buy" />
        <meta property="og:title" content="Product Listing - E-commerce" />
        <meta property="og:description" content="Browse our wide selection of products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/products" />
        <link rel="canonical" href="https://www.example.com/products" />
      </Head>

      <main className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-6">
          <header className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Explore Our Products</h1>
            <p className="text-gray-500 mt-1">Find items by category and price</p>
          </header>

          <section className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <FilterControls
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </section>

          <section>
            <ProductList products={products} />
          </section>

          <section className="flex justify-center">
            <PaginationControls
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalProducts={totalProducts}
              productsPerPage={PRODUCTS_PER_PAGE}
            />
          </section>
        </div>
      </main>
    </>
  );
}
