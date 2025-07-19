"use client";
import { User } from "@supabase/supabase-js";
import SignOutButton from "../atoms/signout-button";
import SignInButton from "../atoms/signin-button";
import SignUpButton from "../atoms/signup-button";
import OptionNoLoginButton from "./option-no-login-butons";
import { createSupabaseBrowserClient } from "../lib/supabase-browser";
import { useEffect, useState } from "react";
import UserMenu from "./user-menu";

export default function ClientSessionButtons({
  session,
}: {
  readonly session: User | null;
}) {
  const [user, setUser] = useState();
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("id", session?.id)
        .single();

      console.log("email: ", data.email);

      setUser(data);
    };
    fetchUser();
  }, [session?.id]);
  return (
    <>
      {session ? (
        <div className="flex">
          <p className="text-amber-900 p-5">{user?.email}</p>
          <UserMenu />
        </div>
      ) : (
        <main>
          <OptionNoLoginButton />
          <section className="h-full hidden md:flex space-x-3">
            <SignInButton />
            <SignUpButton />
          </section>
        </main>
      )}
    </>
  );
}
