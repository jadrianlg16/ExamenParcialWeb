// src/app/welcome/page.tsx
"use client"; // Must be client component to use hooks like useSearchParams

import { Suspense } from 'react'; // Import Suspense
import { useSearchParams, useRouter } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link'; // Use Next.js Link for client-side navigation

function WelcomeContent() {
  const searchParams = useSearchParams(); // Hook to read query params
  const router = useRouter(); // Hook for navigation actions

  const name = searchParams.get('name');
  const memberId = searchParams.get('memberId');

  // Handle cases where parameters are missing or invalid
  if (!name || !memberId) {
    return (
      <div className="bg-white p-10 rounded-lg shadow-md max-w-lg w-full text-center">
         <h1 className="text-2xl font-semibold text-red-600 mb-4">Access Error</h1>
         <p className="text-gray-700 mb-6">
            Required member information is missing. Please log in again.
         </p>
         <button
             onClick={() => router.push('/')} // Use router.push for navigation
             className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Go to Login
         </button>
      </div>
    );
  }

  // Decode the name (if needed, usually handled by browser/Next.js)
  const decodedName = decodeURIComponent(name);

  return (
    <div className="bg-white p-10 rounded-lg shadow-md max-w-lg w-full text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        ¡Hola, {decodedName}!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Gracias por ser parte de Café Aurora.
      </p>
      <p className="text-md text-gray-600">
        Your Membership Number: <strong>{memberId}</strong>
      </p>
      <p className="mt-6 text-sm text-gray-500">
        Stay tuned for exclusive promotions and news!
      </p>
      <div className="mt-8">
         {/* Use Link for client-side routing back to login */}
        <Link href="/" legacyBehavior>
            <a className="text-indigo-600 hover:text-indigo-800 hover:underline">
                Logout (Return to Login)
            </a>
        </Link>
      </div>
    </div>
  );
}


// Main component exported for the page
export default function WelcomePage() {
  return (
    <>
        <Head>
            {/* Title is dynamic based on content, could be set inside WelcomeContent too */}
            <title>Welcome - Café Aurora Members</title>
             <meta name="description" content="Welcome page for logged in Café Aurora members" />
        </Head>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            {/* Wrap content that uses searchParams in Suspense */}
            <Suspense fallback={<div>Loading member details...</div>}>
                <WelcomeContent />
            </Suspense>
        </div>
    </>
  );
}