"use client";
import Link from "next/link";
import { createSupabaseBrowserClient } from "../lib/supabase-browser";
import { useEffect, useState } from "react";

export default function AddItemsButton() {
  const [user, setUser] = useState();
  const supabase = createSupabaseBrowserClient();
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("id", data?.user?.id)
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
