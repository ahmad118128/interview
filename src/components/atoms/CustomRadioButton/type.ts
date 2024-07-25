import { Control, FieldError, RegisterOptions } from 'react-hook-form';

export interface groupDataFace {
  label: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  id: number;
}
export interface ICustomRadio {
  control: Control;
  rules?: RegisterOptions;
  value?: string;
  groupData?: groupDataFace[];
  name: string;
  label?: string;
}

export interface IStyledRadio {
  error?: FieldError | undefined;
}
