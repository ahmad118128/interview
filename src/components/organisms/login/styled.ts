'use client';
import { Box, styled } from '@mui/material';

export const StyledContainerPage = styled(Box)`
  background-image: url('assets/icons/loginBackground/login-background.svg');
  height: 97vh;
  /* width: 100%; */
  background-size: cover;
  background-position: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const StyledIconAiBox = styled(Box)`
  /* height: 93vh; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const StyledContainerBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 40px;
  /* margin-top: 32px; */
  border: 1px solid ${({ theme }) => theme.palette.grey[50]};
  background: ${({ theme }) => theme.palette.common.white};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  @media (max-width: 430px) {
    padding: 40px 24px;
  }
`;
