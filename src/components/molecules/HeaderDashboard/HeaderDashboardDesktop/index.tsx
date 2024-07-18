import { Typography } from '@mui/material';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { registrationStr } from '@/strings';
import { logout } from '@/services/api/auth/logOut';

import { ActionBar, UsernameBox } from './styled';
import { DesktopActions } from './constants';

export default function HeaderDashboardDesktop() {
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
          onClick={logout}
        />
      </UsernameBox>
    </>
  );
}
