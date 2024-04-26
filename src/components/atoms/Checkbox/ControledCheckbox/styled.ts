import { Checkbox, styled } from '@mui/material';
import { IStyledCheckbox } from './type';

export const StyledCheckbox = styled(Checkbox)<IStyledCheckbox>`
  .MuiSvgIcon-root {
    // normal
    fill: ${({ theme, error, disabled }) =>
      disabled
        ? theme.palette.grey[200]
        : error
          ? theme.palette.error.main
          : theme.palette.primary.main};
  }

  &.Mui-checked {
    // checked
    .MuiSvgIcon-root {
      fill: ${({ theme, disabled }) =>
        disabled
          ? theme.palette.grey[200]
          : theme.palette.primary.light} !important;
    }
  }

  :hover {
    // hover
    background-color: transparent !important;
    .MuiSvgIcon-root {
      fill: ${({ theme, error }) =>
        error ? theme.palette.error.main : theme.palette.primary.light};
    }
  }
`;
