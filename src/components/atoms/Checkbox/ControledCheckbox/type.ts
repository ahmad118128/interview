import { ChangeEvent } from 'react';
import { Control, FieldValues } from 'react-hook-form';

export interface IStyledCheckbox {
  error?: boolean;
  disabled?: boolean;
}

export interface IControledCheckboxProps {
  name: string;
  disabled?: boolean;
  checked?: boolean;
  error?: boolean;
  control: Control<FieldValues>;
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void;
}
