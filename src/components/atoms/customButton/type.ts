import {
  ButtonProps as MUIButtonProps,
  IconButtonProps as MUIIconButtonProps,
} from '@mui/material';
import * as MUIcon from '@mui/icons-material';

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
