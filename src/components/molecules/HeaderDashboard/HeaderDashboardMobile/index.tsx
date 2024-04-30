import { MouseEvent, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

import { MenuBox, ProfileViewer } from './styled';
import { ActionButton } from '../styled';
import HeaderButton from '../HeaderButton';
import { MobileActions } from './constants';

export default function HeaderDashboardMobile() {
  const [showMenu, setShowMenu] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setShowMenu(null);
  };

  const showMenuHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setShowMenu(event.currentTarget);
  };

  return (
    <>
      <ActionButton disableRipple onClick={() => console.log('menu-burger')}>
        <Icon icon={'iconamoon:menu-burger-horizontal-bold'} />
      </ActionButton>

      <Image
        alt="Header Logo"
        src={'/assets/images/Logo.svg'}
        width={44}
        height={44}
      />

      <ActionButton disableRipple onClick={showMenuHandler}>
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
        <MenuBox>
          {MobileActions.map((item) => (
            <HeaderButton
              key={item.id}
              mode="mobile"
              tooltipTitle={item.tooltipTitle}
              clickHandler={item.clickHandler}
            >
              {item.icon}
            </HeaderButton>
          ))}
        </MenuBox>
      </ProfileViewer>
    </>
  );
}
