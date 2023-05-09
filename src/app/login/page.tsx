'use client';

import React from 'react';
import Image from 'next/image';
import {LoginWithGoogleButton} from '../components/login/login-with-google-button'
import { useSupabase } from '../supabase-provider';

export default function Login() {
    const {supabase} = useSupabase();

    async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
    console.log(data, error)
    }

    return (
        <div>
            <h1 className="text-6xl font-bold text-center">
                <a> Iniciar Sesion </a>
            </h1>
            {/*  centered button */}

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => signInWithGoogle()}
            >
                <LoginWithGoogleButton/>
            </button>

        </div>
    )

}