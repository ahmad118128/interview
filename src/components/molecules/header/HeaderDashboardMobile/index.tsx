import React, { useState } from 'react';
import { ActionButton } from '../styled';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { ActionMenu, ProfileViewer, ProfileAction } from './styled';

export default function HeaderDashboardMobile() {
  const [showMenu, setShowMenu] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setShowMenu(null);
  };

  return (
    <>
      <ActionButton>
        <Icon icon={'iconamoon:menu-burger-horizontal-bold'} />
      </ActionButton>
      <Image
        alt="test"
        src={'/assets/images/Logo.svg'}
        width={44}
        height={44}
      />
      <ActionButton onClick={(event) => setShowMenu(event.currentTarget)}>
        <Icon icon={'lets-icons:user-fill'} />
        <Icon
          icon={showMenu ? 'iconamoon:arrow-up-2' : 'iconamoon:arrow-down-2'}
        />
      </ActionButton>
      <ProfileViewer
        anchorEl={showMenu}
        open={!!showMenu}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography variant="body1">نام کاربری</Typography>
        <ActionMenu>
          <ProfileAction>
            <Icon width={20} color="#383838" icon={'mdi:question-mark-box'} />
          </ProfileAction>
          <ProfileAction>
            <Icon
              width={20}
              height={18}
              color="#383838"
              icon={'mingcute:notification-fill'}
            />
          </ProfileAction>
          <ProfileAction>
            <Icon width={24} icon={'ion:exit'} />
          </ProfileAction>
        </ActionMenu>
      </ProfileViewer>
    </>
  );
}
