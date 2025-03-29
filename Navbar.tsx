'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          JobBoard
        </Link>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {session ? (
            <>
              <Link href="/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400">
                Dashboard
              </Link>
              <button 
                onClick={() => signOut()}
                className="text-red-600 dark:text-red-400 hover:underline"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/auth/login" className="hover:text-blue-600 dark:hover:text-blue-400">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}