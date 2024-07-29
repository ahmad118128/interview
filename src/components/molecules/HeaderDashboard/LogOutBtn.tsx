'use client';

import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { usePostLogOut } from '@/services/api/auth/usePostLogout';
import { registrationStr } from '@/strings';
import { useRouter } from 'next/navigation';

export const LogOutBtn = () => {
  const logOut = usePostLogOut();
  const router = useRouter();

  const onLogOut = () => {
    logOut(undefined, {
      onSuccess: () => {
        router.push('/login');
      },
      onError: (error) => {
        console.error('Error adding post:', error);
      },
    });
  };
  return (
    <IconButton
      tooltip={registrationStr.logOut}
      iconName="ion:exit"
      onClick={onLogOut}
    />
  );
};
