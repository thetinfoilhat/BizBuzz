"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FishTankRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/practice');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Redirecting...</h1>
        <p className="text-gray-600">Please wait while we redirect you to Fish Tank.</p>
      </div>
    </div>
  );
} 