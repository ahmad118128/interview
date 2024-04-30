import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

import { ActionBar, UsernameBox } from './styled';
import HeaderButton from '../HeaderButton';
import { DesktopActions } from './constants';

export default function HeaderDashboardDesktop() {
  return (
    <>
      <ActionBar>
        {DesktopActions.map((item) => (
          <HeaderButton
            key={item.id}
            mode="desktop"
            tooltipTitle={item.tooltipTitle}
            clickHandler={item.clickHandler}
          >
            {item.icon}
          </HeaderButton>
        ))}
      </ActionBar>

      <UsernameBox>
        <Icon width={24} icon={'lets-icons:user-fill'} />
        <Typography variant="body1">نام کاربری</Typography>

        <HeaderButton
          mode="desktop"
          tooltipTitle="خروج"
          clickHandler={() => console.log('exit')}
        >
          <Icon width={24} icon={'ion:exit'} />
        </HeaderButton>
      </UsernameBox>
    </>
  );
}
