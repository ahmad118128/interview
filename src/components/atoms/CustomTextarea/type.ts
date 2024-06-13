import { Control, FieldValues, RegisterOptions } from 'react-hook-form';

export interface TextareaFormControlProps {
  disabled?: boolean;
  readOnly?: boolean;
  ltr?: boolean;
  error?: boolean;
}

export interface TextAreaProps {
  name: string;
  defaultValue?: string;
  ltr?: boolean;
  placeholder: string;
  label?: string;
  readOnly?: boolean;
  disabled?: boolean;
  minRows?: number;
  error?: boolean;
  control: Control<FieldValues>;
  rules?: Pick<
    RegisterOptions,
    'maxLength' | 'minLength' | 'validate' | 'required'
  >;
}
