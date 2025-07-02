"use client";
import { createSupabaseBrowserClient } from "@/app/components/lib/supabase-browser";

export default function SignIn() {
  const supabase = createSupabaseBrowserClient();
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <button
      onClick={handleSignIn}
      className="px-4 py-1 border border-amber-700 text-amber-700 rounded hover:bg-amber-200 transition"
    >
      Login
    </button>
  );
}
