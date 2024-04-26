import { ChipProps } from '@mui/material';
import { ReactNode } from 'react';

export interface IBasedChip extends ChipProps {
  typeChip: string;
  ltr?: boolean;
  readOnly?: boolean;
  chipSize?: 'normal' | 'medium' | 'small';
  className?: string;
  onDelete?: (event?: any) => void;
}
