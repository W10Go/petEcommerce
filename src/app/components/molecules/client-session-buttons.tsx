"use client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import SignOutButton from "../atoms/signout-button";
import SignInButton from "../atoms/signin-button";

export default function ClientSessionButtons({
  session,
}: {
  readonly session: User | null;
}) {
  console.log("ClientSessionButtons", session);
  return (
    <>
      {session ? (
        <SignOutButton />
      ) : (
        <div className="flex items-center space-x-3">
          <SignInButton />
          <Link href="/signup">
            <button className="px-4 py-1 bg-amber-700 text-white rounded hover:bg-amber-800 transition">
              SignUp
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
