import theme from '@/theme';
import { styled } from '@mui/material';
import { DesktopDateTimePicker } from '@mui/x-date-pickers';

export const StyledDateTimePicker = styled(DesktopDateTimePicker)<{
  hasError: boolean;
}>`
  direction: rtl;
  width: 100%;

  & label {
    color: ${theme.palette.grey[300]};
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    right: 25px;
    left: unset !important;
  }

  & label[data-shrink='true'] {
    right: 25px;
    color: ${theme.palette.grey[300]} !important;
  }

  & input {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
  }

  & .MuiInputBase-root {
    padding: 0.75rem 0.75rem 0.75rem 0;
    height: 48px;
    color: ${theme.palette.grey[300]};
    direction: rtl;
    font-family: 'iran-sans, serif, sans-serif';

    & button {
      color: ${theme.palette.grey[300]};
      padding: 0;
    }
  }
  & fieldset {
    text-align: right;
    border: none;
    border-bottom: 1px solid
      ${({ hasError }) =>
        hasError
          ? theme.palette.error.main
          : theme.palette.grey[300]} !important;
    border-radius: unset;
  }
  &:hover {
    fieldset {
      border-bottom: 1px solid
        ${({ hasError }) =>
          hasError
            ? theme.palette.error.main
            : theme.palette.secondary.main} !important;
    }
  }
`;
