"use client";
import { createSupabaseBrowserClient } from "@/app/components/lib/supabase-browser";
import { useState } from "react";
import { redirectTo } from "../lib/navigation";

const supabase = createSupabaseBrowserClient();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      await supabase
        .from("user_activity")
        .insert({ log_type: 2, user_id: data.user?.id }); // log an activity for login (not necesary but I like it)

      if (error) {
        setErrorText("Error al iniciar sesión: ");
      } else {
        redirectTo("/shop");
      }
    } catch (e) {
      setErrorText("Error signing up:" + e);
    }
  };
  return (
    <main className="flex items-center justify-center min-h-screen bg-amber-50">
      <form className="flex flex-col text-amber-900" onSubmit={handleLogin}>
        <h1 className="text-amber-900 text-center pb-10 text-4xl">
          Inicio de sesión
        </h1>

        <input
          type="email"
          placeholder="Correo electronico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-7 px-4 py-2 w-100 border-b"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-7 px-4 py-2 border-b"
        />
        <p className="text-red-600 mb-4">{errorText}</p>
        <button className="bg-amber-900 text-white rounded py-2">
          Iniciar sesión
        </button>
      </form>
    </main>
  );
}
