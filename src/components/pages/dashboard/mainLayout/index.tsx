import {
  StyledChildLayout,
  StyledContainerAppBar,
  StyledMainLayout,
} from '@/app/dashboard/styled';
import HeaderDashboard from '@/components/molecules/HeaderDashboard';
import { openDashboard } from '@/context/dashboardContext/dashboardContext';
import { TSidebarContext } from '@/context/dashboardContext/type';
import { PropsWithChildren, useContext } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  const { isOpen, setIsOpen } = useContext(openDashboard) as TSidebarContext;
  return (
    <StyledMainLayout isOpen={isOpen}>
      <HeaderDashboard />
      <StyledChildLayout>{children}</StyledChildLayout>
    </StyledMainLayout>
  );
}
