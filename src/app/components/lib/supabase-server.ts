import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const createSupabaseServerClient = async () => {
  const cookieStore = await cookies(); // con await

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      get: (name) => cookieStore.get(name)?.value,
      set: async (name, value, options) => {
        cookieStore.set(name, value, options);
      },
      remove: async (name) => {
        cookieStore.delete(name);
      },
    },
  });
};
