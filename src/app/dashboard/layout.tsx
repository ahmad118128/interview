'use client';
import { PropsWithChildren } from 'react';
import { StyledContainerLayout } from './styled';
import DashboardContextProvider from '@/context/dashboardContext';
import SideBar from '@/components/organisms/sideBar';
import MainLayout from '@/components/pages/dashboard/mainLayout';
import { Hidden } from '@mui/material';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <DashboardContextProvider>
      <StyledContainerLayout>
        <Hidden mdDown>
          <SideBar />
        </Hidden>
        <MainLayout>{children}</MainLayout>
      </StyledContainerLayout>
    </DashboardContextProvider>
  );
}
