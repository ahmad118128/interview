import { BaseInputProps } from '@/components/BaseComponents/baseInput/type';
import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export type TCustomInput<TField extends FieldValues> = BaseInputProps & {
  control: Control<TField, any>;
  rules?: RegisterOptions;
  name: Path<TField>;
};

export type SecondaryCustomInputTypes = {
  width?: string;
  margin?: string;
  padding?: string;
  borderBottom?: string;
  marginTop?: string;
  labelColor?: string;
  autofillBackgroundColor?: string;
  focusedBorderBottom?: string;
  direction?: 'rtl' | 'ltr';
  labelDirection?: 'rtl' | 'ltr';
  placeholderFontSize?: string;
  placeholderFontWeight?: string;
  focusedLabelColor?: string;
  inputColor?: string;
};
