import { BaseInputProps } from '@/components/baseComponents/baseInput';
import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export type TCustomInput<TField extends FieldValues> = BaseInputProps & {
  control: Control<TField, any>;
  rules?: RegisterOptions;
  name: Path<TField>;
};
