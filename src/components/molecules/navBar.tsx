import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="fixed w-full bg-amber-100 shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo or Site Title */}
      <div className="flex items-center space-x-2">
        <Image
          src="/dogo.png" // Replace with your logo path
          alt="Site Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="hidden md:inline font-bold text-4xl text-gray-800">
          Tarci
        </span>
      </div>
      {/* Navigation Links */}
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
        <Link
          href="/contact"
          className="md:text-xl text-amber-900 hover:text-amber-700"
        >
          Contactanos
        </Link>
      </div>
      {/* Auth Buttons */}
      <div className="flex items-center space-x-3">
        <Link href="/login">
          <button className="px-4 py-1 border border-amber-700 text-amber-700 rounded hover:bg-amber-200 transition">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="px-4 py-1 bg-amber-700 text-white rounded hover:bg-amber-800 transition">
            SignUp
          </button>
        </Link>
      </div>
    </nav>
  );
}
