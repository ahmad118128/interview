import { TextareaAutosizeProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export interface TextareaFormControlProps {
  disabled?: boolean;
  readOnly?: boolean;
  ltr?: boolean;
  error?: boolean;
  ali?: string;
}

export interface TextAreaProps
  extends TextareaAutosizeProps,
    UseControllerProps {
  name: string;
  defaultValue?: string;
  ltr?: boolean;
  placeholder: string;
  label?: string;
  readOnly?: boolean;
  disabled?: boolean;
  error?: boolean;
}
