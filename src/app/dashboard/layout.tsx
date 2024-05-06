'use client';
import { PropsWithChildren } from 'react';
import {
  StyledChildLayout,
  StyledContainerAppBar,
  StyledContainerLayout,
  StyledMainLayout,
} from './styled';
import DashboardContextProvider from '@/context/dashboardContext/dashboardContext';
import SideBar from '@/components/organism/sideBar';
import MainLayout from '@/components/pages/dashboard/mainLayout';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <>
      <DashboardContextProvider>
        <StyledContainerLayout>
          <SideBar />
          <MainLayout>{children}</MainLayout>
        </StyledContainerLayout>
      </DashboardContextProvider>
    </>
  );
}
