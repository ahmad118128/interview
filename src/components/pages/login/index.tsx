import Image from 'next/image';

import { LoginAccount } from '@/components/organisms/login/LoginAccount';
import { StyledContainerBox } from '@/components/organisms/login/styled';

export const Login = () => {
  return (
    <StyledContainerBox>
      <Image
        src="/assets/icons/roobinLogo/roobin-logo.svg"
        alt=""
        width="166"
        height="80"
      />
      <LoginAccount />
    </StyledContainerBox>
  );
};
