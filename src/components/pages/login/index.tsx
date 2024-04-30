import { LoginAccount } from '@/components/organisms/login/LoginAccount';
import { StyledContainerBox } from '@/components/organisms/login/styled';

export const Login = () => {
  return (
    <StyledContainerBox>
      <img src="/assets/icons/roobinLogo/roobin-logo.svg" alt="" />
      <LoginAccount />
    </StyledContainerBox>
  );
};
