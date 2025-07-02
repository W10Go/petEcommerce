import Image from "next/image";
import { createSupabaseServerClient } from "../components/lib/supabase-server";

type Product = {
  id: number;
  created_at: string;
  quantity: number;
  description: string;
  price: string;
  name: string;
  image_url: string;
};

export default async function Shop() {
  const supabase = await createSupabaseServerClient();
  const { data: products } = (await supabase.from("product").select("*")) as {
    data: Product[] | null;
  };

  console.log("Products:", products);

  return (
    <div className="min-h-screen bg-amber-50 pt-24 px-4">
      <h1 className="text-4xl font-bold text-amber-900 mb-10 text-center">
        Tienda
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            {/* Image Placeholder */}
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
            <button className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
