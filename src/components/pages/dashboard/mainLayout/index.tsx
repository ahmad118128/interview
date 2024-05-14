import { StyledChildLayout, StyledMainLayout } from '@/app/dashboard/styled';
import HeaderDashboard from '@/components/molecules/HeaderDashboard';
import { openDashboard } from '@/context/dashboardContext';
import { PropsWithChildren, useContext } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  const { isOpen } = useContext(openDashboard);

  return (
    <StyledMainLayout isOpen={isOpen}>
      <HeaderDashboard />

      <StyledChildLayout>{children}</StyledChildLayout>
    </StyledMainLayout>
  );
}
