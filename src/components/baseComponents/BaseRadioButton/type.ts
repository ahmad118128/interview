import { RadioProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export interface BaseInputRadio extends RadioProps {
  label?: string;
  className?: string;
}
