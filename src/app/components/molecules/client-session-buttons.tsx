"use client";
import { User } from "@supabase/supabase-js";
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
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();

    const fetchUser = async () => {
      console.log(session);

      if (session !== null) {
        const { data } = await supabase
          .from("users")
          .select("*")
          .eq("id", session?.id)
          .single();

        setUser(data);
      }
    };
    fetchUser();
  }, [session]);
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
