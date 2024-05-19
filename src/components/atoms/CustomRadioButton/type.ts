import { Control, FieldError, RegisterOptions } from 'react-hook-form';

export interface ICustomRadio {
  name: string;
  label?: string;
  control: Control;
  rules?: RegisterOptions;
  value?: string;
}

export interface IStyledRadio {
  error?: FieldError | undefined;
}
