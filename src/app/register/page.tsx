"use client";
import { createSupabaseBrowserClient } from "@/app/components/lib/supabase-browser";
import { useState } from "react";
import { redirectTo } from "../components/lib/navigation";

const supabase = createSupabaseBrowserClient();

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorText("Las contraseñas no coinciden");
      return;
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo:
            "https://pet-ecommerce-w10gos-projects.vercel.app/auth/callback",
          data: {
            document_type: "1",
          },
        },
      });
      if (error) {
        throw error;
      }
      console.log("Sign up successful:", data);
      redirectTo("/shop");
    } catch (e) {
      console.error("Error signing up:", e);
      // Handle error (e.g., show a notification or alert)
    }
  };
  return (
    <main className="flex items-center justify-center min-h-screen bg-amber-50">
      <form className="flex flex-col text-amber-900" onSubmit={handleSignUp}>
        <h1 className="text-amber-900 text-center pb-10 text-4xl">
          Crear cuenta
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
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mb-7 px-4 py-2 border-b"
        />
        <p className="text-red-600 mb-4">{errorText}</p>
        <button className="bg-amber-900 text-white rounded py-2">
          Registrarse
        </button>
      </form>
    </main>
  );
}
