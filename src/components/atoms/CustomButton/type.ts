import { IconifyIconProps } from '@iconify/react/dist/iconify.js';
import {
  ButtonProps as MUIButtonProps,
  IconButtonProps as MUIIconButtonProps,
} from '@mui/material';

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
export interface IconButtonProps extends Omit<MUIIconButtonProps, 'children'> {
  title?: string;
  iconName: IconifyIconProps['icon'];
  tabButton?: boolean;
  height?: number;
  width?: number;
}
