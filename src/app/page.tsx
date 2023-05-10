'use client';
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { useSupabase } from './supabase-provider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const { supabase } = useSupabase();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* main e commerce page */}
      <div className="flex flex-col items-center justify-center">
        {/* Display "Welcome to mikro ${user}", if the user has logged in */}
        <h1 className="text-6xl font-bold text-center">
          Welcome to Mikro
        </h1>
        {/* Create a button that redirects to /login */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          onClick={() => router.push('/login')}>
            Login
        </button>
      </div>
    </main>
  )
}
