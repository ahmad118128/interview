import { MouseEvent, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

import { MenuBox, ProfileViewer } from './styled';
import { ActionButton } from '../styled';
import HeaderButton from '../HeaderButton';
import { MobileActions } from './constants';
import { registrationStr } from '@/strings';
import MyDrawer from '@/components/organisms/Drawer';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';

export default function HeaderDashboardMobile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showMenuHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <ActionButton disableRipple onClick={() => setOpenDrawer(true)}>
        <IconButton
          iconName={'iconamoon:menu-burger-horizontal-bold'}
          width={24}
          height={24}
        />
      </ActionButton>
      <MyDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

      <Image
        alt="Header Logo"
        src={'/assets/images/Logo.svg'}
        width={44}
        height={44}
      />

      <ActionButton disableRipple onClick={showMenuHandler}>
        <Icon icon={'lets-icons:user-fill'} />
        <Icon
          icon={anchorEl ? 'iconamoon:arrow-up-2' : 'iconamoon:arrow-down-2'}
        />
      </ActionButton>

      <ProfileViewer
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography variant="body1">{registrationStr.username}</Typography>
        <MenuBox>
          {MobileActions.map((item) => (
            <IconButton
              key={item.id}
              title={item.tooltipTitle}
              onClick={item.onClick}
              iconName={item.icon}
              width={24}
              height={24}
            />
          ))}
        </MenuBox>
      </ProfileViewer>
    </>
  );
}
