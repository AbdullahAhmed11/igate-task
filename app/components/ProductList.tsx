import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  if (!products.length) return <p className="text-center">No products found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
