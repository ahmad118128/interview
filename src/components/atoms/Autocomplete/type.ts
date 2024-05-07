import { ChangeEventHandler } from 'react';
import {
  AutocompleteFreeSoloValueMapping,
  AutocompleteProps,
} from '@mui/material';
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
} from 'react-hook-form';

export type OmitProps =
  | 'renderInput'
  | 'PaperComponent'
  | 'renderOption'
  | 'renderTags'
  | 'popupIcon'
  | 'disableClearable';

export type RHFAutoCompleteProps<
  OptionType,
  TField extends FieldValues,
  FreeSolo extends boolean | undefined,
> = Omit<
  AutocompleteProps<OptionType, boolean, boolean, FreeSolo>,
  OmitProps | 'name'
> & {
  name: Path<TField>;
  control: Control<TField>;
  label: string;
  rules?: RegisterOptions;
  defaultValue?: PathValue<TField, Path<TField>>;
  getOptionValue?: (
    option: OptionType | AutocompleteFreeSoloValueMapping<FreeSolo>
  ) => any;
};

export type ExtendedAutocompleteProps<
  OptionType,
  Multiple extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> = Omit<
  AutocompleteProps<OptionType, Multiple, boolean, FreeSolo>,
  OmitProps
> & {
  label?: string;
  onTextFieldChange?: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
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
