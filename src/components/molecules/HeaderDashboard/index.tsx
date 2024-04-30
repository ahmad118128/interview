'use client';
import { Hidden } from '@mui/material';

import { HeaderBox } from './styled';
import HeaderDashboardDesktop from './HeaderDashboardDesktop';
import HeaderDashboardMobile from './HeaderDashboardMobile';

export default function HeaderDashboard() {
  return (
    <HeaderBox>
      <Hidden mdDown>
        <HeaderDashboardDesktop />
      </Hidden>

      <Hidden mdUp>
        <HeaderDashboardMobile />
      </Hidden>
    </HeaderBox>
  );
}
