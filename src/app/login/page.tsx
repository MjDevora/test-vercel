import React from 'react';
import { useSupabase } from '../supabase-provider';

export default function Login() {
    const {supabase} = useSupabase();
    
    const handleLogout = async () => {
    await supabase.auth.signOut();
    };

    async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
    console.log(data, error)
    }

    return ()
        <main className="flex min-h-screen flex-col items-center justify-between p-24">