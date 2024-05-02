'use client';
import { CSSProperties } from 'react';
import { Box, styled } from '@mui/material';

const flexStyle: Pick<
  CSSProperties,
  'display' | 'flexDirection' | 'justifyContent' | 'alignItems'
> = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const StyledContainerPage = styled(Box)`
  background-image: url('assets/icons/loginBackground/login-background.svg');
  height: 100vh;
  background-size: cover;
  background-position: cover;
  overflow: hidden;
  ${flexStyle}
`;

export const StyledIconAiBox = styled(Box)`
  ${flexStyle};
`;

export const StyledContainerBox = styled(Box)`
  background-color: white;
  padding: 2.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.palette.grey[50]};
  background: ${({ theme }) => theme.palette.common.white};
  box-shadow: 0.25rem 0.25rem 0.625rem rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;
  @media (max-width: 430px) {
    padding: 2.5rem 1.5rem;
  }
  ${flexStyle}
`;
