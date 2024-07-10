import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

import { ActionBar, UsernameBox } from './styled';
import HeaderButton from '../HeaderButton';
import { DesktopActions } from './constants';
import { registrationStr } from '@/strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';

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

        <IconButton tooltip={registrationStr.logOut} iconName="ion:exit" />
      </UsernameBox>
    </>
  );
}
