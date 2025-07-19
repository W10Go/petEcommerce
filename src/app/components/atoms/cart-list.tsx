"use client";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { redirectTo } from "../lib/navigation";
import { createSupabaseBrowserClient } from "../lib/supabase-browser";
import {
  type Product,
  type User,
  type Shopping_cart,
} from "../types/shopTypes";

export default function CartList() {
  const { cart, clearCart } = useCart();
  const [invoice, setInvoice] = useState(false);
  const [cartInvoice, setCartInvoice] = useState<Shopping_cart>();
  const [user, setUser] = useState<User | null>(null);
  const [total, setTotal] = useState(0);
  const [cartToShow, setCartToShow] = useState<Product[]>([]);

  useEffect(() => {
    setTotal(
      cartToShow?.reduce((sum, item) => {
        return sum + parseFloat(item.price) * item.quantity;
      }, 0)
    );
  }, [cartToShow]);

  const handlePayment = async () => {
    // Aquí podrías implementar la lógica para proceder al pago
    console.log("Procediendo al pago...");
    const supabase = createSupabaseBrowserClient();

    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error("Error fetching user:", error);
    }
    if (!data.user) {
      redirectTo("/login");
    }

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", data?.user?.id)
      .single();

    if (userError) {
      console.error("Error fetching user data:", userError);
      return;
    }
    setUser(userData);

    const { data: cartData, error: cartError } = await supabase
      .from("shopping_cart")
      .insert({ user_id: data.user?.id })
      .select("*")
      .single();

    if (cartError) {
      console.error("Error creating cart:", cartError);
      return;
    }

    setCartInvoice(cartData);
    const cartId = cartData.id;
    const cartProducts = cart?.map((item) => ({
      cart_id: cartId,
      product_id: item.id,
      quantity: item.quantity,
    }));

    const { data: insertData, error: insertError } = await supabase
      .from("cart_product")
      .insert(cartProducts);

    if (insertError) {
      console.error("Error inserting cart products:", insertError);
      return;
    }
    setCartToShow([...(cart ?? [])]);
    clearCart?.();
    setInvoice(true);

    if (insertData) {
      redirectTo("/shop");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {invoice && (
        <div className="bg-white p-4 rounded shadow-md mb-4">
          <h1 className="text-5xl font-bold mb-4 border-b-2">
            DETALLE DE LA FACTURA
          </h1>
          <p>user: {user?.first_name || "anonimo"}</p>

          <p>id transacción: {cartInvoice?.id || "null"}</p>
          <p>
            fecha de emisión:{" "}
            {cartInvoice?.created_at &&
              new Date(cartInvoice.created_at).toLocaleString("es-CO", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-2">Nombre</th>
                  <th className="p-2">Precio</th>
                  <th className="p-2">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {cartToShow?.map((item) => (
                  <tr key={item.id} className="border-t border-gray-200">
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">${item.price}</td>
                    <td className="p-2">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>total</td>
                  <td>$ {total}</td>
                </tr>
              </tfoot>
            </table>

            <p className="p-3">Total y 19% de IVA: {total + total * 0.19}</p>

            <p className="mt-5 text-2xl">Gracias por su compra!</p>
          </div>
        </div>
      )}
      {!invoice && (
        <div>
          <h1 className="text-5xl font-bold mb-4">Carrito de Compras</h1>
          <p>Aquí se mostrarán los productos añadidos al carrito.</p>
          {cartToShow?.map((item) => (
            <div key={item.id} className="flex gap-5 p-4 mb-4 border-b-2">
              <h2 className="text-lg font-bold">{item.name}</h2>|
              <p className="text-gray-600">Precio: {item.price}</p>|
              <p className="text-gray-600">Cantidad: {item.quantity}</p>
            </div>
          ))}
          {cartToShow?.length === 0 && (
            <p className="text-gray-500">Tu carrito está vacío.</p>
          )}
          {cartToShow?.length > 0 && (
            <section className="flex gap-5 justify-center items-center">
              <button
                onClick={handlePayment}
                className="mt-4 px-6 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition"
              >
                Proceder al pago
              </button>
              <button
                onClick={clearCart}
                className="mt-4 px-6 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition"
              >
                Vaciar carrito
              </button>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
