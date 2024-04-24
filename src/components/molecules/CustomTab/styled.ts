'use client';

import { styled } from '@mui/material';
import { BaseTab } from '../../baseComponents/BaseTab';

export const CustomTab = styled(BaseTab)`
  &.normalTab {
    margin-bottom: 2.563rem;
    .MuiTab-root {
      font-style: normal;
      font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
      font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
      line-height: ${({ theme }) => theme.typography.subtitle1.lineHeight};
      &[aria-selected='false'] {
        color: #000;
      }
    }
    .MuiTabs-scroller {
      border-bottom: 0.156rem solid ${({ theme }) => theme.palette.grey[200]};
    }
    .Mui-selected {
      color: ${({ theme }) => theme.palette.primary.light};
      background-color: ${({ theme }) => theme.palette.grey[50]};
      border-radius: 0.625rem 0.625rem 0 0;
    }
    .MuiTabs-indicator {
      background-color: ${({ theme }) =>
        theme.palette.primary.light} !important;
      height: 0.125rem;
      border-radius: 0.313rem !important;
    }
  }
  &.buttonTab {
    margin-bottom: 2.563rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .MuiTab-root {
      min-height: 0;
      min-width: 0;
      padding: 10px 12px !important;
      font-style: normal;
      font-weight: ${({ theme }) =>
        theme.typography.button.fontWeight} !important;
      font-size: ${({ theme }) => theme.typography.button.fontSize} !important;
      border-radius: 0.375rem;
      border: 0.063rem solid ${({ theme }) => theme.palette.grey[300]};
      &[aria-selected='false'] {
        color: ${({ theme }) => theme.palette.primary.main};
        background: ${({ theme }) => theme.palette.grey[50]};
      }
    }
    .Mui-selected {
      color: ${({ theme }) => theme.palette.primary.light};
      background-color: ${({ theme }) => theme.palette.grey[100]};
      border-color: ${({ theme }) => theme.palette.primary.light};
    }
    .MuiTabs-flexContainer {
      gap: 0.625rem;
    }
    .MuiTabs-indicator {
      display: none;
    }
  }
`;
