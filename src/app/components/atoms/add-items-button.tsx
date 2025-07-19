"use client";
import Link from "next/link";
import { createSupabaseBrowserClient } from "../lib/supabase-browser";
import { useEffect, useState } from "react";

type User = {
  user_role: string;
};

export default function AddItemsButton() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const supabase = createSupabaseBrowserClient();

    const fetchUser = async () => {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData?.user) {
        return;
      } else {
        const { data } = await supabase
          .from("users")
          .select("*")
          .eq("id", userData.user?.id)
          .single();

        setUser(data);
      }
    };
    fetchUser();
  }, []);
  return (
    <div>
      {user?.user_role === "admin" && (
        <Link href={"/additems"} className="text-black">
          Añadir productos
        </Link>
      )}
    </div>
  );
}
