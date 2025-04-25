import { useEffect, useState } from "react";
import Head from "next/head";
import FilterControls from "@/app/components/FilterControls";
import ProductList from "@/app/components/ProductList";
import PaginationControls from "@/app/components/PaginationControls";
import axios from "axios";
const PRODUCTS_PER_PAGE = 10;

export default function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
        if (category) {
          url = `https://dummyjson.com/products/category/${category}?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
        }
        const res = await axios.get(url);
        const filtered = res.data.products.filter(
          (p: any) => p.price >= priceRange[0] && p.price <= priceRange[1]
        );
        setProducts(filtered);
        setTotalProducts(res.data.total);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [category, priceRange, currentPage]);

  return (
    <>
      <Head>
        <title>Product Listing</title>
        <meta name="description" content="Browse our latest products" />
      </Head>
      <main className="p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
        <FilterControls
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <ProductList products={products} />
        <PaginationControls
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
          productsPerPage={PRODUCTS_PER_PAGE}
        />
      </main>
    </>
  );
} 