import { Typography } from '@mui/material';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { registrationStr } from '@/strings';
import { logout } from '@/services/api/auth/logOut';
import Link from 'next/link';
import { ActionBar, UsernameBox } from './styled';
import { DesktopActions } from './constants';
import HeaderButton from '../HeaderButton';
import { Icon } from '@iconify/react';

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
        <Link
          href={'/dashboard/profile'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: 'black',
          }}
        >
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
