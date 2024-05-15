import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { TProps } from '../type';

export type TControlledProps<TField extends FieldValues> = {
  name: Path<TField>;
  control: Control<TField>;
  rules: RegisterOptions;
} & TProps;
