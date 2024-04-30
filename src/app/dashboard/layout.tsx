import HeaderDashboard from '@/components/molecules/HeaderDashboard';
import React, { ReactNode } from 'react';
import { ContainerBox } from './styled';

export default function DashboardHeader({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderDashboard />
      <ContainerBox>{children}</ContainerBox>
    </>
  );
}
