'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import DashboardPage from '@/components/pages/dashboard/dashboardPage';

export default function Dashboard() {
  const router = useRouter();
  const [userSession] = useState(() => {
    if (global?.window !== undefined) {
      const userSession = window?.localStorage?.getItem('userSession');
      return userSession ? JSON.parse(userSession) : null;
    }
    return null;
  });

  useEffect(() => {
    if (!userSession) {
      router.push('/login');
    }
  }, [userSession]);

  if (userSession) {
    return <DashboardPage />;
  }
}
