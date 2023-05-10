"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import type { Session } from "@supabase/gotrue-js";

import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "../../types/supabase";

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
  session: Session | null;
  user: Session["user"] | null;
  signOut: () => Promise<any>;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<Session["user"] | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function getActiveSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
    }
    getActiveSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT") {
        setSession(null);
        setUser(null);
      }
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };  
  }, [router, supabase]);

  return (
    <Context.Provider value={{ 
      supabase, 
      session,  
      user,
      signOut: () => supabase.auth.signOut(),
      }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  let context = useContext(Context);

  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};