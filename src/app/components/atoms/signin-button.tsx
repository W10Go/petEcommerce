"use client";
import Link from "next/link";

export default function SignIn() {
  return (
    <Link href="/login">
      <button className="px-4 py-1 border border-amber-700 text-amber-700 rounded hover:bg-amber-200 transition">
        Iniciar sesión
      </button>
    </Link>
  );
}
