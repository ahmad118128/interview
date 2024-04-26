import { styled } from '@mui/material';
import { BaseSearchBar } from '../BaseSearchBar';

export const StyledSearchBar = styled(BaseSearchBar)`
  & .MuiInputBase-root {
    height: 2.5rem;
    width: 35rem;
    padding: 0.75rem 0.5rem;
    background-color: ${({ theme }) => theme.palette.grey[50]};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
    line-height: ${({ theme }) => theme.typography.body1.lineHeight};
    color: ${({ theme }) => theme.palette.grey[300]};
    svg {
      transition: color 0.2s ease-in-out;
    }
    .MuiButtonBase-root {
      padding: 0;
    }
    .MuiOutlinedInput-notchedOutline {
      transition: border-color 0.2s ease-in-out;
      border: 0.0625rem solid ${({ theme }) => theme.palette.grey[300]};
      border-radius: 0.375rem;
    }
    :hover .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
    :hover svg {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
  & .Mui-focused {
    background-color: ${({ theme }) => theme.palette.grey[100]};
    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.palette.primary.light} !important;
    }
    svg {
      color: ${({ theme }) => theme.palette.primary.light} !important;
    }
  }
`;
