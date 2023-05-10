'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from './supabase-provider';
import type { Session } from '@supabase/gotrue-js';

export default function Home() {
  const router = useRouter();
  const { supabase } = useSupabase();
  const [userSession, setUserSession] = useState<Session | null>(null);

  useEffect(() => {
    async function getCurrentSession() {
      const { data: {session} } = await supabase.auth.getSession();
      setUserSession(session);
    }
    getCurrentSession();
  }, [supabase]);

  const userName: String = userSession?.user?.user_metadata?.full_name || 'Not logged in';

  async function handleLogout() {
    await supabase.auth.signOut();
    setUserSession(null);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          Welcome to Mikro, {userName} 
        </h1>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            if (userSession) {
              handleLogout();
            } else {
              router.push('/login');
            }
          }}>
            {userSession ? 'Logout' : 'Login'}
        </button>
      </div>
    </main>
  )
}
