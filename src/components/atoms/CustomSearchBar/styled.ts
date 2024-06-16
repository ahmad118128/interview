import { BaseSearchBar } from '@/components/BaseComponents/BaseSearchBar';
import { styled } from '@mui/material';

export const StyledSearchBar = styled(BaseSearchBar)`
  & .MuiInputBase-root {
    height: 3rem;
    width: 35rem;
    padding: 0.75rem 0.5rem;
    background-color: ${({ theme }) => theme.palette.grey[50]};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
    line-height: ${({ theme }) => theme.typography.body1.lineHeight};
    color: ${({ theme }) => theme.palette.primary.main};
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.palette.grey[50]}
        inset;
    }
    input:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.palette.grey[100]}
        inset;
    }
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

    & ::placeholder {
      color: ${({ theme }) => theme.palette.grey[300]} !important;
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
