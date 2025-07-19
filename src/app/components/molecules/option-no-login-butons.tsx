"use client";
import SignInButton from "../atoms/signin-button";
import SignUpButton from "../atoms/signup-button";
import { useState } from "react";

export default function OptionNoLoginButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className=" mb-2"
        >
          <path fill="#333333" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
        </svg>
      </button>
      {isOpen && (
        <div className="flex flex-col bg-amber-200 right-0 absolute justify-center items-center shadow-md px-10 gap-2 py-4 rounded-md">
          <SignInButton />
          <SignUpButton />
        </div>
      )}
    </main>
  );
}
