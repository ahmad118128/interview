'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import DashboardPage from '@/components/pages/dashboard/dashboardPage';

export default function Dashboard() {
  const router = useRouter();
  const [userSession] = useState(() => localStorage.getItem('userSession'));

  useEffect(() => {
    if (!userSession) {
      router.push('/login');
    }
  }, [userSession, router]);

  if (userSession) {
    return <DashboardPage />;
  }
}
