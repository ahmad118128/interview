'use client';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Icon } from '@iconify/react';
import { IconButton, TextField } from '@mui/material';
import { searchbarProps } from './type';

export const BaseSearchBar = (props: searchbarProps) => {
  const {
    id,
    name,
    placeholder,
    searchHandler,
    defaultValue,
    spinner,
    showSpinner,
    className,
  } = props;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setvalue(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler(value);
    }
  };

  const [value, setvalue] = useState(defaultValue ?? '');
  return (
    <TextField
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChangeInput}
      onKeyDown={handleKeyPress}
      value={value}
      className={className}
      InputProps={{
        endAdornment: showSpinner ? (
          spinner
        ) : (
          <IconButton onClick={() => searchHandler(value)}>
            <Icon icon="tabler:search" width="24" height="24" />
          </IconButton>
        ),
      }}
    />
  );
};
