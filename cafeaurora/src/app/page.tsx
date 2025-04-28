// src/app/page.tsx
"use client"; // This page uses hooks (useState, useRouter), so it must be a Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use navigation router for App Router
import Head from 'next/head'; // Still useful for setting title/meta in Client Components
import LoginForm from '@/components/LoginForm'; // Use alias
import { loginUser } from '@/lib/authService'; // Use alias
import { LoginCredentials } from '@/types'; // Use alias

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (credentials: LoginCredentials) => {
    setError(null);
    setIsLoading(true);
    try {
      const userData = await loginUser(credentials);
      // Navigate using App Router's router.push
      // Encode data for URL safety
      const nameParam = encodeURIComponent(userData.fullName);
      const memberIdParam = encodeURIComponent(userData.membershipNumber);
      router.push(`/welcome?name=${nameParam}&memberId=${memberIdParam}`);
      // No need to set isLoading false on success navigation
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred during login.');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Café Aurora Members</title>
        <meta name="description" content="Login portal for Café Aurora members" />
      </Head>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50"> {/* Use full height flex */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Optional: Add a logo here */}
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Café Aurora"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Café Aurora Member Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access your benefits
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="bg-white px-6 py-8 shadow rounded-lg sm:px-10"> {/* Added card style */}
            <LoginForm
              onSubmit={handleLogin}
              error={error}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
}