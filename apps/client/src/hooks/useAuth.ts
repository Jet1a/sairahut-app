'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      router.push('/admin-login');
      return;
    }
    fetch('/api/admin/verify-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
    .then(response => response.json())
    .then(data => {
      if (!data.valid) {
        router.push('/admin-login');
      }
    })
    .catch(error => {
      console.error("Token verification failed:", error);
      router.push('/admin-login');
    });
  }, [router]);

  return null;
};
