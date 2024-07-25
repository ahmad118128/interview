import { Typography } from '@mui/material';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { registrationStr } from '@/strings';
import { ActionBar, UsernameBox } from './styled';
import { DesktopActions } from './constants';
import { usePostLogOut } from '@/services/api/auth/usePostLogout';
import { useRouter } from 'next/navigation';

export default function HeaderDashboardDesktop() {
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
    <>
      <ActionBar>
        {DesktopActions.map((item) => (
          <IconButton
            key={item.id}
            tooltip={item.tooltipTitle}
            onClick={item.onClick}
            iconName={item.icon}
          />
        ))}
      </ActionBar>

      <UsernameBox>
        <IconButton iconName={'lets-icons:user-fill'} />
        <Typography variant="body1">{registrationStr.username}</Typography>

        <IconButton
          tooltip={registrationStr.logOut}
          iconName="ion:exit"
          onClick={onLogOut}
        />
      </UsernameBox>
    </>
  );
}
