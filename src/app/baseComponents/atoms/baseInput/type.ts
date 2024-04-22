import {
  InputProps,
  InputBaseComponentProps,
  TextFieldVariants,
} from '@mui/material';
import { HTMLInputTypeAttribute, ReactElement, ChangeEvent } from 'react';
import {
  FieldValues,
  UseControllerProps,
  UseFormSetError,
  ValidationValueMessage,
} from 'react-hook-form';

export type StyledTextFieldRtlType = {
  ltrValue?: boolean;
  ltrLabel?: boolean;
  typeInput?: HTMLInputTypeAttribute;
};
export type ValidateType =
  | 'en'
  | 'fa'
  | 'num'
  | 'money'
  | 'cardNumber'
  | 'fa_spc'
  | 'enCharacters';
export interface BaseInputProps extends UseControllerProps {
  element?: ReactElement;
  type?: HTMLInputTypeAttribute;
  endAdornment?: ReactElement;
  startAdornment?: ReactElement;
  ltrValue?: 'ltr' | 'rtl';
  ltrLabel?: boolean;
  label?: string;
  validateType?: ValidateType;
  inputBaseProps?: InputBaseComponentProps;
  inputProps?: InputProps;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: TextFieldVariants;
  id?: string;
  className?: string;
  setError?: UseFormSetError<FieldValues>;
  changeMiddleWare?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
}
