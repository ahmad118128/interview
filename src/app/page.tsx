'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    const userSession = localStorage.getItem('userSession');

    if (!userSession) {
      router.push('/login');
    } else {
      router.push('/dashboard');
    }
  }
}
