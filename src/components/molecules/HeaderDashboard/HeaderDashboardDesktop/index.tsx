import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

import { ActionBar, UsernameBox } from './styled';
import HeaderButton from '../HeaderButton';
import { DesktopActions } from './constants';
import { registrationStr } from '@/strings';
import { logout } from '@/services/api/auth/logOut';
import Link from 'next/link';

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
        <Link
          href={'/dashboard/profile'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: 'black',
          }}
        >
          {' '}
          <Icon width={24} icon={'lets-icons:user-fill'} />
          <Typography variant="body1">{registrationStr.username}</Typography>
        </Link>
        <HeaderButton tooltipTitle="خروج" clickHandler={logout}>
          <Icon width={24} icon={'ion:exit'} />
        </HeaderButton>
      </UsernameBox>
    </>
  );
}
