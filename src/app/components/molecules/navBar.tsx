import Link from "next/link";
import Image from "next/image";
import { ServerSessionButtons } from "./server-session-buttons";
import CartButton from "../atoms/cart-button";
import AddItemsButton from "../atoms/add-items-button";

export default function NavBar() {
  return (
    <nav className="fixed w-full bg-amber-100 shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo or Site Title */}
      <div className="items-center space-x-2 hidden md:flex">
        <Image
          src="/dogo.png"
          alt="Site Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="hidden md:inline font-bold text-4xl text-gray-800">
          Tarci
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className="md:text-xl text-amber-900 hover:text-amber-700"
        >
          Inicio
        </Link>
        <Link
          href="/shop"
          className="md:text-xl text-amber-900 hover:text-amber-700"
        >
          Tienda
        </Link>
        <AddItemsButton />
      </div>

      <section className="flex items-center space-x-6">
        <Link href={"/cart"}>
          <button>
            <CartButton />
          </button>
        </Link>
        <ServerSessionButtons />
      </section>
    </nav>
  );
}
