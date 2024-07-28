import { ChangeEvent } from 'react';

export interface IStyledCheckbox {
  error?: boolean;
  disabled?: boolean;
}

export interface ICustomCheckboxProps {
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  error?: boolean;
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  indeterminate?: boolean;
}
