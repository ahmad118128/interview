'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { StyledContainerPage } from '@/components/organisms/login/styled';
import { Login } from '@/components/pages/login';

const LoginPage = () => {
  const router = useRouter();
  const [userSession] = useState(() => localStorage.getItem('userSession'));

  useEffect(() => {
    if (userSession) {
      router.push('/dashboard');
    }
  }, [userSession, router]);

  // Render login component if userSession is not found
  return !userSession ? (
    <StyledContainerPage>
      <Login />
    </StyledContainerPage>
  ) : null;
};

export default LoginPage;
