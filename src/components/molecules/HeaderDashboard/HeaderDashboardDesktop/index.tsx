import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

import { ActionBar, UsernameBox } from './styled';
import HeaderButton from '../HeaderButton';
import { DesktopActions } from './constants';
import { registrationStr } from '@/strings';
import { logout } from '@/services/api/auth/logOut';

export default function HeaderDashboardDesktop() {
  return (
    <>
      <ActionBar>
        {DesktopActions.map((item) => (
          <HeaderButton
            key={item.id}
            tooltipTitle={item.tooltipTitle}
            clickHandler={item.clickHandler}
          >
            {item.icon}
          </HeaderButton>
        ))}
      </ActionBar>

      <UsernameBox>
        <Icon width={24} icon={'lets-icons:user-fill'} />
        <Typography variant="body1">{registrationStr.username}</Typography>

        <HeaderButton tooltipTitle="خروج" clickHandler={logout}>
          <Icon width={24} icon={'ion:exit'} />
        </HeaderButton>
      </UsernameBox>
    </>
  );
}
