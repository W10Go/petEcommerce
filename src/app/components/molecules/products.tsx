"use client";
import type { Product } from "../types/shopTypes";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Products({
  products,
}: Readonly<{ products: Product[] }>) {
  const { addToCart } = useCart();

  return (
    <>
      {products?.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
        >
          <div className="w-40 h-40 bg-amber-100 rounded mb-4 flex items-center justify-center">
            <Image
              src={product.image_url}
              alt={product.name}
              width={160}
              height={160}
              className="object-cover rounded"
            />
          </div>
          <h2 className="text-2xl font-semibold text-amber-900 mb-2 text-center">
            {product.name}
          </h2>
          <p className="text-amber-800 mb-2 text-center">
            {product.description}
          </p>
          <span className="text-lg font-bold text-amber-700 mb-4">
            {product.price}
          </span>
          <button
            onClick={() => addToCart!(product)} // error-free
            className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition"
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </>
  );
}
