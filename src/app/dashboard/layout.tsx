import { PropsWithChildren } from 'react';
import {
  StyledChildLayout,
  StyledContainerAppBar,
  StyledContainerLayout,
  StyledContainerSideBar,
  StyledMainLayout,
} from './styled';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <>
      <StyledContainerLayout>
        <StyledContainerSideBar />
        <StyledMainLayout>
          <StyledContainerAppBar />
          <StyledChildLayout>{children}</StyledChildLayout>
        </StyledMainLayout>
      </StyledContainerLayout>
    </>
  );
}
