'use client';

import React from 'react';
import Image from 'next/image';
import {LoginButton} from '../components/login/login-button'
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
            <button
                onClick={() => signInWithGoogle()}
            >
                <LoginButton
                    buttonImage="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    buttonText="Usar Google"
                />
            </button>

        </div>
    )

}