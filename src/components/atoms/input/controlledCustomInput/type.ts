import { BaseInputProps } from '@/app/baseComponents/atoms/baseInput/type';
import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export type TCustomInput<TField extends FieldValues> = BaseInputProps & {
  control: Control<TField, any>;
  rules?: RegisterOptions;
  name: Path<TField>;
};
