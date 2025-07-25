"use client";
import { useCart } from "../context/CartContext";

export default function CartButton() {
  const { cart } = useCart();

  const lengthProducts = cart?.length || 0;
  return (
    <div className=" flex items-center justify-center">
      <p className="bg-red-400 rounded-4xl size-5">{lengthProducts}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="#333333"
          d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25z"
        />
      </svg>
    </div>
  );
}
