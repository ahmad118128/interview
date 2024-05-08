import { PropsWithChildren } from 'react';
import {
  StyledChildLayout,
  StyledContainerLayout,
  StyledContainerSideBar,
  StyledMainLayout,
} from './styled';
import HeaderDashboard from '@/components/molecules/HeaderDashboard';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <>
      <StyledContainerLayout>
        <StyledContainerSideBar />
        <StyledMainLayout>
          <HeaderDashboard />
          <StyledChildLayout>{children}</StyledChildLayout>
        </StyledMainLayout>
      </StyledContainerLayout>
    </>
  );
}
