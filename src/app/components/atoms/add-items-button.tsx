"use client";
import Link from "next/link";
import { createSupabaseBrowserClient } from "../lib/supabase-browser";
import { useEffect, useState } from "react";
import { redirectTo } from "../lib/navigation";

type User = {
  user_role: string;
};

export default function AddItemsButton() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createSupabaseBrowserClient();
  useEffect(() => {
    const fetchUser = async () => {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData?.user) {
        redirectTo("/login");
      }
      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("id", userData.user?.id)
        .single();

      setUser(data);
    };
    fetchUser();

    console.log(user);
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
