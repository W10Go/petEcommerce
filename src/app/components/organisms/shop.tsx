import { createSupabaseServerClient } from "../lib/supabase-server";
import Products from "../molecules/products";
import { type Product } from "../types/shopTypes";

export default async function Shop() {
  const supabase = await createSupabaseServerClient();
  const { data: products } = (await supabase.from("product").select("*")) as {
    data: Product[] | null;
  };
  return (
    <main className="min-h-screen bg-amber-50 pt-24 px-4">
      <h1 className="text-4xl font-bold text-amber-900 mb-10 text-center">
        Tienda
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Products products={products || []} />
      </div>
    </main>
  );
}
