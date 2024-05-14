import { Autocomplete as MUIAutocomplete } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { AutocompleteTextField, CustomPaper, Listbox } from './styled';

import { ExtendedAutocompleteProps } from './type';
import { ReactNode } from 'react';
import { CustomChip } from '../CustomChip';
import { generalStr } from '@/strings';

export function CustomAutocomplete<
  OptionType,
  Multiple extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>({
  options,
  label,
  dir = 'rtl',
  onChange,
  onTextFieldChange,
  ...rest
}: ExtendedAutocompleteProps<OptionType, Multiple, FreeSolo>) {
  return (
    <MUIAutocomplete
      {...rest}
      dir={dir}
      options={options}
      onChange={onChange}
      noOptionsText={generalStr.notFound}
      renderInput={(params) => (
        <AutocompleteTextField
          dir={dir}
          {...params}
          label={label}
          variant="filled"
          onChange={onTextFieldChange}
        />
      )}
      renderOption={(props, option) => (
        <Listbox {...props} dir={dir}>
          <span>
            {rest.getOptionLabel
              ? rest.getOptionLabel(option)
              : (option as ReactNode)}
          </span>
          <CheckIcon />
        </Listbox>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <CustomChip
            chipSize="small"
            typeChip="baseChip"
            label={
              rest.getOptionLabel
                ? rest.getOptionLabel(option)
                : (option as ReactNode)
            }
            {...getTagProps({ index })}
            key={index}
            deleteIcon={<ClearIcon fontSize="small" />}
          />
        ))
      }
      PaperComponent={CustomPaper}
      popupIcon={<KeyboardArrowDownIcon />}
      disableClearable={rest.multiple ? true : false}
    />
  );
}
