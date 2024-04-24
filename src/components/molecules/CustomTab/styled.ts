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
      transition: color ease-in 0.2s;
      &[aria-selected='false'] {
        color: #000;
      }
      &:hover {
        color: ${({ theme }) => theme.palette.primary.dark};
      }
    }
    .MuiTabs-scroller {
      border-bottom: 0.156rem solid ${({ theme }) => theme.palette.grey[200]};
    }
    .Mui-selected {
      color: ${({ theme }) => theme.palette.primary.light} !important;
      background-color: ${({ theme }) => theme.palette.grey[50]};
      border-radius: 0.625rem 0.625rem 0 0;
    }
    .Mui-disabled {
      color: ${({ theme }) => theme.palette.grey[300]} !important;
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
    align-items: center;
    .MuiTab-root {
      min-height: 0;
      min-width: 0;
      padding: 0.625rem 0.75rem;
      font-style: normal;
      font-weight: ${({ theme }) => theme.typography.button.fontWeight};
      font-size: ${({ theme }) => theme.typography.button.fontSize};
      border-radius: 0.375rem;
      border: 0.063rem solid ${({ theme }) => theme.palette.grey[300]};
      transition: all ease-in 0.2s;
      &[aria-selected='false'] {
        color: ${({ theme }) => theme.palette.primary.main};
        background-color: ${({ theme }) => theme.palette.grey[50]};
      }
      &:hover {
        color: ${({ theme }) => theme.palette.primary.dark};
        border-color: ${({ theme }) => theme.palette.primary.dark};
      }
    }
    .Mui-selected {
      color: ${({ theme }) => theme.palette.primary.light} !important;
      background-color: ${({ theme }) => theme.palette.grey[100]};
      border-color: ${({ theme }) => theme.palette.primary.light} !important;
    }
    .Mui-disabled {
      color: ${({ theme }) => theme.palette.grey[300]} !important;
      background-color: ${({ theme }) => theme.palette.grey[200]} !important;
      border-color: ${({ theme }) => theme.palette.grey[300]} !important;
    }
    .MuiTabs-flexContainer {
      gap: 0.625rem;
    }
    .MuiTabs-indicator {
      display: none;
    }
  }
`;
