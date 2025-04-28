// src/components/LoginForm.tsx
"use client"; // This component uses hooks (useState), so it must be a Client Component

import React, { useState, FormEvent } from 'react';
import { LoginCredentials } from '@/types';

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => Promise<void>;
  error: string | null;
  isLoading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error, isLoading }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // We only pass username and password here. Backend expects both.
    console.log('Form submission - username:', username, 'password:', password);
    await onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6"> {/* Increased spacing */}
      {error && (
        <div className="p-3 text-sm text-red-800 bg-red-100 rounded-lg border border-red-300" role="alert">
          <span className="font-medium">Error:</span> {error}
        </div>
      )}
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-gray-900" // Updated Tailwind class
        >
          Username
        </label>
        <div className="mt-2"> {/* Added margin top */}
          <input
            type="text"
            id="username"
            name="username" // Added name attribute
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username" // Added autocomplete
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50" // Updated Tailwind classes
            disabled={isLoading}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900" // Updated Tailwind class
        >
          Password
        </label>
        <div className="mt-2"> {/* Added margin top */}
          <input
            type="password"
            id="password"
            name="password" // Added name attribute
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password" // Added autocomplete
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50" // Updated Tailwind classes
            disabled={isLoading}
          />
        </div>
      </div>
      <div> {/* Added wrapper div for button */}
        <button
          type="submit"
          className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
            isLoading
              ? 'bg-indigo-300 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-500' // Updated Tailwind classes
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;