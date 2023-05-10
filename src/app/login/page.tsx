'use client';

import React from 'react';
import { useSupabase } from '../supabase-provider';
import { LoginCard } from '../components/login-card/login-card';
import { Success } from '../components/success/success';

export default function Login() {
    const {supabase} = useSupabase();

    async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
    
    console.log(data, error)
    }

    return (
        // center the login card at the center of the page
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
           <LoginCard loginHandler={signInWithGoogle} /> 
            <Success 
                message = "¡Listo! Ya puedes usar tu cuenta de Google para iniciar sesión."
            />
        </div>
    )

}