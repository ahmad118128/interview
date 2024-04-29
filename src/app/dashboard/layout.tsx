import { PropsWithChildren } from 'react';
import {
  StyledChildLayout,
  StyledContainerAppBar,
  StyledContainerLayout,
  StyledContainerSideBar,
  StyledMainLayout,
  StyledSideBar,
} from './styled';

export default function AdminLayout(props: PropsWithChildren) {
  const { children } = props;

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
{
  /* <StyledContainerLayout>
  <StyledSideBar></StyledSideBar>
  <StyledChildLayout open={showSidebar}>
    <DashboardContainer type={type}>{children}</DashboardContainer>
  </StyledChildLayout>
</StyledContainerLayout> */
}
