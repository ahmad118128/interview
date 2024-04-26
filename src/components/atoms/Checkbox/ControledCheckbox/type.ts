import { Control } from 'react-hook-form';

export interface IStyledCheckbox {
  error?: boolean;
  disabled?: boolean;
}

export interface IControledCheckboxProps {
  name: string;
  disabled?: boolean;
  checked?: boolean;
  error?: boolean;
  control: Control<any>;
  onChange?: (event?: any) => void;
}
