import { Typography } from '@mui/material';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { registrationStr } from '@/strings';
import { ActionBar, UsernameBox } from './styled';
import { DesktopActions } from './constants';
import { LogOutBtn } from '../LogOutBtn';

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

        <LogOutBtn />
      </UsernameBox>
    </>
  );
}
