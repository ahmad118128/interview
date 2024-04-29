import { ButtonProps as MUIButtonProps } from '@mui/material';

export type ButtonProps = (
  | {
      loading?: boolean;
      loadingText?: false;
    }
  | {
      loading?: false;
      loadingText?: boolean;
    }
) &
  MUIButtonProps;
