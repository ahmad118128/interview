import React from 'react';
import { Autocomplete } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { RHFAutoCompleteProps } from './type';
import { AutocompleteTextField, CustomPaper, Listbox } from './styled';
import { CustomChip } from '@/components/atoms/CustomChip/index';
import { generalStr } from '@/strings';

export const CustomRHFAutocomplete = <
  OptionType,
  TField extends FieldValues,
  FreeSolo extends boolean | undefined = false,
>({
  name,
  control,
  options = [],
  label,
  dir = 'rtl',
  multiple,
  freeSolo,
  getOptionValue,
  getOptionLabel,
  defaultValue,
  rules,
  fullWidth,
  ...rest
}: RHFAutoCompleteProps<OptionType, TField, FreeSolo>) => {
  const getValueFromOption = (option: OptionType) =>
    getOptionValue ? getOptionValue(option) : option;

  const getLabelFromOption = getOptionLabel || ((option) => String(option));

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          {...rest}
          dir={dir}
          multiple={multiple}
          freeSolo={freeSolo}
          options={options}
          noOptionsText={generalStr.notFound}
          getOptionLabel={getLabelFromOption}
          onChange={(_, newValue) => {
            if (freeSolo) {
              onChange(newValue);
            } else if (multiple) {
              const processedValue = Array.isArray(newValue)
                ? newValue.map((item) => getValueFromOption(item as OptionType))
                : [];
              onChange(processedValue);
            } else {
              const processedValue =
                newValue != null
                  ? getValueFromOption(newValue as OptionType)
                  : newValue;
              onChange(processedValue);
            }
          }}
          value={
            freeSolo
              ? value
              : multiple
                ? (Array.isArray(value) ? value : []).map(
                    (val) =>
                      options.find(
                        (option) => getValueFromOption(option) === val
                      ) || val
                  )
                : options.find(
                    (option) => getValueFromOption(option) === value
                  ) ||
                  value ||
                  null
          }
          renderInput={(params) => (
            <AutocompleteTextField
              dir={dir}
              {...params}
              label={label}
              variant="filled"
              error={!!error}
              helperText={error?.message}
            />
          )}
          renderOption={(props, option) => (
            <Listbox {...props} dir={dir}>
              <span>{getLabelFromOption(option)}</span>
              <CheckIcon />
            </Listbox>
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <CustomChip
                chipSize="small"
                typeChip="baseChip"
                label={getLabelFromOption(option)}
                {...getTagProps({ index })}
                deleteIcon={<ClearIcon fontSize="small" />}
                key={index}
              />
            ))
          }
          PaperComponent={CustomPaper}
          popupIcon={<KeyboardArrowDownIcon />}
          disableClearable={multiple ? true : false}
        />
      )}
    />
  );
};
