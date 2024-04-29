import { ChipProps } from '@mui/material';
import { MouseEvent } from 'react';

export interface IBasedChip extends ChipProps {
  typeChip: string;
  ltr?: boolean;
  readOnly?: boolean;
  chipSize?: 'normal' | 'medium' | 'small';
  className?: string;
  onDelete?: (event?: MouseEvent<HTMLButtonElement>) => void;
}
