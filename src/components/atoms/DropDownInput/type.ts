// import { ReactElement } from 'react';
// import { UseControllerProps, UseFormSetError } from 'react-hook-form';
// import { InputProps, TextareaAutosizeProps } from '@mui/material';
// import { OptionsType } from 'types';

// type InputType = 'password' | 'text' | 'money';
// export interface OptionInputProps extends UseControllerProps {
//   element?: ReactElement;
//   type?: InputType;
//   endAdornment?: ReactElement;
//   startAdornment?: ReactElement;
//   ltrValue?: 'ltr' | 'rtl';
//   ltrLable?: boolean;
//   label?: string;
//   validateType?: 'en' | 'fa' | 'num' | 'money' | 'cardNumber';
//   inputPropsEn?: InputProps;
//   disabled?: boolean;
//   fullWidth?: boolean;
// }

// export interface BaseInputRadio extends UseControllerProps {
//   element?: ReactElement;
//   lable?: string;
// }

// export type styledInput = {
//   ltrValue?: 'ltr' | 'rtl';
// };
// export type StyledTextFieldRtlType = {
//   ltrValue?: boolean;
//   ltrLable?: boolean;
//   typeInput?: InputType;
// };

// export interface TextareaFormControlProps {
//   disabled?: boolean;
//   readOnly?: boolean;
//   ltr?: boolean;
//   error?: boolean;
// }

// export interface TextAreaProps
//   extends TextareaAutosizeProps,
//     UseControllerProps {
//   name: string;
//   defaultValue?: string | string[];
//   ltr?: boolean;
//   placeholder: string;
//   label?: string;
//   readOnly?: boolean;
//   disabled?: boolean;
// }
// export type StyledSearchBoxType = {
//   White?: boolean;
// };
// export type SearchInputProps = {
//   id?: string;
//   type?: string;
//   name?: string;
//   placeholder?: string;
//   onChange: (e: string) => void;
//   white?: boolean;
// };
// export type SelectOptionsType = {
//   id?: string | number;
//   value: string;
//   label?: string;
// };
// export interface SelectProps extends UseControllerProps {
//   options?: SelectOptionsType[];
//   element?: ReactElement;
//   label?: string;
//   disabled?: boolean;
//   readOnly?: boolean;
// }
// export type StyledFormControlType = {
//   error?: boolean;
//   readOnly?: boolean;
//   disabled?: boolean;
// };

// export interface AutoCompleteProps extends UseControllerProps {
//   label: string;
//   ltr?: boolean;
//   placeholder?: string;
//   options: OptionsType[];
//   noOptionsText?: string;
//   limitTags?: number;
//   multiple?: boolean;
//   readOnly?: boolean;
//   disabled?: boolean;
//   element?: ReactElement;
//   freeSolo?: boolean;
//   id?: string;
// }

// export type StyledAutoCompleteType = {
//   ltr?: boolean;
//   readOnly?: boolean;
//   disabled?: boolean;
// };
