import { PropsWithChildren } from 'react';
import {
  StyledChildLayout,
  StyledContainerAppBar,
  StyledContainerLayout,
  StyledContainerSideBar,
  StyledSideBar,
} from './styled';

export default function AdminLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <StyledContainerLayout>
        <StyledContainerSideBar />
        <StyledContainerAppBar />
        <StyledChildLayout>{children}</StyledChildLayout>
      </StyledContainerLayout>
    </>
  );
}
{
  /* <StyledContainerLayout>
  <StyledSideBar></StyledSideBar>
  <StyledChildLayout open={showSidebar}>
    <DashboardContainer type={type}>{children}</DashboardContainer>
  </StyledChildLayout>
</StyledContainerLayout> */
}
