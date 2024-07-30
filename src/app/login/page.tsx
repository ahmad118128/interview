'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { StyledContainerPage } from '@/components/organisms/login/styled';
import { Login } from '@/components/pages/login';

const LoginPage = () => {
  const router = useRouter();
  const [userSession] = useState(() => {
    if (global?.window !== undefined) {
      const userSession = window?.localStorage?.getItem('userSession');
      return userSession ? JSON.parse(userSession) : null;
    }
    return null;
  });

  useEffect(() => {
    if (userSession) {
      router.push('/dashboard');
    }
  }, [userSession]);

  // Render login component if userSession is not found
  return (
    !userSession && (
      <StyledContainerPage>
        <Login />
      </StyledContainerPage>
    )
  );
};

export default LoginPage;
