import { ChangeEventHandler } from 'react';
import {
  AutocompleteFreeSoloValueMapping,
  AutocompleteProps,
  TextFieldProps,
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

// export type AutocompleteTextFieldTypes = {
//   direction?: 'rtl' | 'ltr';
//   labelDirection?: 'rtl' | 'ltr';
// };

export type AutocompleteTextFieldTypes = TextFieldProps & {
  direction?: 'rtl' | 'ltr';
  labelDirection?: 'rtl' | 'ltr';
};
