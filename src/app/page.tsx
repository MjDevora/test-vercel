'use client';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { supabase } from './utils/supabaseClient'

const inter = Inter({ subsets: ['latin'] })

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
  console.log(data, error)
}

export default function Home() {
  const Router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Button to login -> send to login page */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
      onClick={() => {
        // use next/navigation to send to login page
        signInWithGoogle()
      }}>
        Login
      </button>
    </main>
  )
}
