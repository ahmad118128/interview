import React from 'react';
import { ActionBar, ActionButton, UsernameBox } from '../styled';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Typography } from '@mui/material';

export default function HeaderDashboardDesktop() {
  return (
    <>
      <ActionBar>
        <ActionButton aria-label="delete">
          <Icon width={20} color="#383838" icon={'mdi:question-mark-box'} />
        </ActionButton>
        <ActionButton aria-label="delete">
          <Icon
            width={20}
            height={18}
            color="#383838"
            icon={'mingcute:notification-fill'}
          />
        </ActionButton>
      </ActionBar>
      <UsernameBox>
        <Icon width={24} icon={'lets-icons:user-fill'} />
        <Typography variant="body1">نام کاربری</Typography>
        <Icon width={24} icon={'ion:exit'} />
      </UsernameBox>
    </>
  );
}
