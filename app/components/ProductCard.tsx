'use client';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-52">
        <Image
          src={product.thumbnail}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{product.title}</h2>
        <p className="text-sm text-gray-500 mt-1">${product.price}</p>
      </div>
    </div>
  );
}
