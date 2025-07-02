"use client";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/app/components/lib/supabase-browser";

export default function SignOutButton() {
  const router = useRouter();

  const supabase = createSupabaseBrowserClient();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
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
