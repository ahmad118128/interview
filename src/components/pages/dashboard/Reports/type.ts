import { Control, FieldValues, UseFormReset } from 'react-hook-form';

export interface IModalState {
  state: boolean;
  id?: number;
}
export interface IFilterFormProps {
  control: Control<FieldValues>;
  reset: UseFormReset<FieldValues>;
}
