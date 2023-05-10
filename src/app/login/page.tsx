'use client';

import React from 'react';
import { useSupabase } from '../supabase-provider';
import { LoginCard } from '../components/login-card/login-card';

export default function Login() {
    const { supabase } = useSupabase();
    const origin = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://mikro-hecarrillo.vercel.app/';

    async function signInWithGoogle() {
        await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: `${origin}`,
          },
        });
    }

    return (
        // center the login card at the center of the page
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
           <LoginCard loginHandler={signInWithGoogle} /> 
        </div>
    )

}