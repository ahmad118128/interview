import theme from '@/theme';
import { styled } from '@mui/material';
import { MobileDateTimePicker } from '@mui/x-date-pickers';

export const StyledDateTimePicker = styled(MobileDateTimePicker)<{
  hasError: boolean;
}>`
  direction: rtl;
  width: 100%;
  position: relative;

  .MuiFormControl-root,
  .MuiInputBase-root {
    z-index: 0;
  }
  & label {
    color: ${theme.palette.primary.main};
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    right: 25px;
    left: unset !important;

    &[data-shrink='true'] {
      right: 16px;
      color: ${theme.palette.primary.light} !important;
    }
  }

  & input {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${theme.palette.primary.main};
  }

  & .MuiInputBase-root {
    padding: 0.75rem 0.75rem 0.75rem 0;
    height: 48px;
    color: ${theme.palette.grey[300]};
    direction: rtl;
    font-family: 'iran-sans, serif, sans-serif';

    & .MuiInputAdornment-root > svg {
      fill: ${theme.palette.primary.main};
      padding: 0;
      cursor: default;

      &.clear {
        cursor: pointer;
      }
    }
  }
  & fieldset {
    text-align: right;
    border: none;
    border-bottom: 1px solid
      ${({ hasError }) =>
        hasError
          ? theme.palette.error.main
          : theme.palette.primary.main} !important;
    border-radius: unset;
  }
  &:hover {
    fieldset {
      border-bottom: 1px solid
        ${({ hasError }) =>
          hasError
            ? theme.palette.error.main
            : theme.palette.primary.light} !important;
    }
    .MuiInputAdornment-root > svg {
      fill: ${theme.palette.primary.light};
    }
  }
  &[data-shrink='true'] {
    .MuiInputAdornment-root > svg {
      fill: ${theme.palette.primary.light};
      &.clear {
        color: ${theme.palette.primary.light};
      }
    }
    fieldset {
      border-bottom: 1px solid ${theme.palette.primary.light};
    }
  }
`;
