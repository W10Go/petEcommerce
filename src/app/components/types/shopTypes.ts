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
