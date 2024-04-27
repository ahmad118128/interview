import { TextareaAutosizeProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export interface TextAreaProps
  extends TextareaAutosizeProps,
    UseControllerProps {
  name: string;
  defaultValue?: string;
  ltr?: boolean;
  placeholder: string;
  label?: string;
  readOnly?: boolean;
  error?: boolean;
}

export interface IStyledBox {
  error?: boolean;
}
