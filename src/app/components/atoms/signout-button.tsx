"use client";
import { createSupabaseBrowserClient } from "@/app/components/lib/supabase-browser";
import { redirectTo } from "../lib/navigation";

export default function SignOutButton() {
  const supabase = createSupabaseBrowserClient();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    redirectTo("/");
  };

  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
    >
      Sign Out
    </button>
  );
}
