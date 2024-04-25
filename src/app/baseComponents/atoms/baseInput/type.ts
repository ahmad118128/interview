import { TextFieldProps } from '@mui/material/TextField';
import { HTMLInputTypeAttribute, ReactElement, ChangeEvent } from 'react';
import { FieldValues, UseFormSetError } from 'react-hook-form';

export type StyledTextFieldRtlType = {
  ltrValue?: boolean;
  ltrLabel?: boolean;
  typeInput?: HTMLInputTypeAttribute;
  value?: unknown;
};
export type ValidateType =
  | 'en'
  | 'fa'
  | 'num'
  | 'money'
  | 'cardNumber'
  | 'fa_spc'
  | 'enCharacters';
export type BaseInputProps = TextFieldProps & {
  validateType?: ValidateType;
  setError?: UseFormSetError<FieldValues>;
};
