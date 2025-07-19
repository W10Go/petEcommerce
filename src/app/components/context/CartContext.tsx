"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { Product, CartContextType } from "../types/shopTypes";

const defaultValue: CartContextType = {
  cart: [],
  addToCart: () => {}, // función vacía para evitar errores si se usa sin Provider
  clearCart: () => {}, // función vacía para evitar errores si se usa sin Provider
};

export const CartContext = createContext<CartContextType>(defaultValue);

export function CartProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [cart, setCart] = useState<Product[]>([] as Product[]); // Inicializar con un array vacío de productos

  const addToCart = (product: Product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex > -1) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      const updatedCart = [...cart];
      updatedCart[productInCartIndex].quantity += 1;
      setCart(updatedCart);
      return;
    }
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  // ✅ Load from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
