import { ChipProps } from '@mui/material';

export type StyledChipType = {
  ltr?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};

export interface ICustomChip extends ChipProps {
  typeChip: string;
  ltr?: boolean;
  chipSize: string;
}
