import { Control, FieldError } from 'react-hook-form';

export interface ICustomRadio {
  name: string;
  label?: string;
  control: Control;
  rules?: { required: boolean | string };
  value?: string;
}

export interface IStyledRadio {
  error?: FieldError | undefined;
}
