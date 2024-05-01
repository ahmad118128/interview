import { PropsWithChildren } from 'react';
import {
  StyledChildLayout,
  StyledContainerAppBar,
  StyledContainerLayout,
  StyledContainerSideBar,
  StyledMainLayout,
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
