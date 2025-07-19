"use client";
import Link from "next/link";

export default function SignUpButton() {
  return (
    <Link href="/register">
      <button className="px-4 py-1 bg-amber-700 text-white rounded hover:bg-amber-800 transition">
        Registrarse
      </button>
    </Link>
  );
}
