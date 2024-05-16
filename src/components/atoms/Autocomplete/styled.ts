import { Paper, TextField, styled } from '@mui/material';
import { AutocompleteTextFieldTypes } from './type';

export const AutocompleteTextField = styled(
  TextField
)<AutocompleteTextFieldTypes>`
  & > div {
    padding: 0 !important;
  }

  & .MuiChip-root {
    margin-top: 0.625rem;
    margin-right: 0.25rem;
  }

  & .MuiFilledInput-root {
    color: ${({ theme }) => theme.palette.common.black};
    border-radius: 0.375rem 0.375rem 0 0;
    background-color: ${({ theme }) => theme.palette.grey[100]};
    min-height: 3rem;
    padding-block: 0.5rem !important;
    align-items: flex-end;

    ::before {
      border-color: ${({ theme }) => theme.palette.primary.main};
    }

    .MuiInputBase-input {
      padding-inline: 0.5rem;
      box-sizing: border-box;
    }

    & .MuiAutocomplete-endAdornment {
      left: ${({ dir }) => (dir == 'rtl' ? '0' : 'auto')};
      right: ${({ dir }) => (dir == 'ltr' ? '0' : 'auto')};
    }

    & .MuiSvgIcon-root {
      color: ${({ theme }) => theme.palette.grey[300]};
    }
  }

  & .MuiFormHelperText-root {
    text-align: ${({ dir }) => (dir == 'rtl' ? 'right' : 'left')};
    margin-inline: 0.25rem;
  }

  &:hover {
    & .MuiAutocomplete-endAdornment svg {
      color: ${({ theme }) => theme.palette.primary.light};
    }

    .MuiFilledInput-root {
      background-color: ${({ theme }) => theme.palette.grey[100]} !important;
      ::before {
        border-color: ${({ theme }) => theme.palette.primary.light} !important;
      }
    }

    label {
      color: ${({ theme }) => theme.palette.primary.light};
    }
  }

  & .Mui-focused {
    ::after {
      border-color: ${({ theme }) => theme.palette.primary.light} !important;
    }
    svg {
      color: ${({ theme }) => theme.palette.primary.light} !important;
    }
  }

  & label {
    color: ${({ theme }) => theme.palette.primary.main};
    transform: translate(
        ${({ labelDirection }) =>
          labelDirection === 'ltr' ? '0.5rem' : '-0.5rem'},
        0.875rem
      )
      scale(1);
    right: ${({ labelDirection }) => (labelDirection === 'ltr' ? 'auto' : '0')};
    left: ${({ labelDirection }) => (labelDirection === 'ltr' ? '0' : 'auto')};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  }

  & label.MuiInputLabel-shrink {
    transform: translate(
        ${({ direction }) => (direction === 'ltr' ? '0.5rem' : '-0.5rem')},
        0.125rem
      )
      scale(1);
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }

  & label.Mui-focused {
    transform: translate(
        ${({ direction }) => (direction === 'ltr' ? '0.5rem' : '-0.5rem')},
        0.125rem
      )
      scale(1);
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: ${({ theme }) => theme.palette.primary.light} !important;
  }
`;

export const CustomPaper = styled(Paper)`
  background-color: ${({ theme }) => theme.palette.common.white} !important;
  border: 0.0625rem solid ${({ theme }) => theme.palette.grey[200]};
  padding: 0.25rem;
  border-radius: 0 0 0.375rem 0.375rem;

  & .MuiAutocomplete-noOptions {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
    padding-right: 0;
  }
`;

export const Listbox = styled('li')`
  justify-content: space-between !important;
  padding: 0.375rem !important;
  margin-block: 0.25rem;
  background-color: transparent !important;
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  color: ${({ theme }) => theme.palette.primary.main};
  svg {
    display: none;
  }
  &[aria-selected='true'] {
    svg {
      display: block;
    }
  }
`;
