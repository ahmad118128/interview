'use client';
import { Box, styled } from '@mui/material';

export const CardBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-radius: 0.625rem;
  border: 0.0625rem solid ${({ theme }) => theme.palette.grey[200]};
  background-color: ${({ theme }) => theme.palette.grey[50]};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const ImageBox = styled(Box)`
  border: 0.125rem solid ${({ theme }) => theme.palette.grey[200]};
  border-radius: 50%;
  padding: 0.375rem;
  overflow: hidden;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const TitleText = styled('span')`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight}rem;
  width: 4.75rem;
  color: ${({ theme }) => theme.palette.common.black};
`;

export const CountText = styled('span')`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary.light};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 2.25rem;
  }
`;
