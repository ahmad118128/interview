import { TextareaAutosizeProps } from '@mui/material';
import { Control, FieldValues, InputValidationRules, RegisterOptions, UseControllerProps } from 'react-hook-form';

export interface TextareaFormControlProps {
  disabled?: boolean;
  readOnly?: boolean;
  ltr?: boolean;
  error?: boolean;
}

export interface TextAreaProps
     {
  name: string;
  defaultValue?: string;
  ltr?: boolean;
  placeholder: string;
  label?: string;
  readOnly?: boolean;
  disabled?: boolean;
  error?: boolean;
  control: Control<FieldValues>
  rules?: Pick<
  RegisterOptions,
  "maxLength" | "minLength" | "validate" | "required"
>
}
