export type Product = {
  id: number;
  created_at: string;
  quantity: number;
  description: string;
  price: string;
  name: string;
  image_url: string;
};

export type CartContextType = {
  cart?: Product[];
  addToCart?: (product: Product) => void;
  clearCart?: () => void;
};

export type User = {
  first_name: string;
  user_role: string;
};

export type Shopping_cart = {
  id: number;
  user_id: number;
  created_at: string;
};
