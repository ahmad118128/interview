'use client';
import { useState, ChangeEvent } from 'react';
import { Icon } from '@iconify/react';
import { IconButton, TextField } from '@mui/material';
import { searchbarProps } from './type';

export const BaseSearchBar = (props: searchbarProps) => {
  const {
    id,
    name,
    placeholder,
    onClick,
    defaultValue,
    spinner,
    showSpinner,
    className,
  } = props;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setvalue(value);
  };

  const [value, setvalue] = useState(defaultValue ?? '');
  return (
    <TextField
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChangeInput}
      value={value}
      className={className}
      InputProps={{
        endAdornment: (
          <>
            {showSpinner ? (
              spinner
            ) : (
              <IconButton onClick={onClick}>
                {showSpinner ? <></> : <></>}
                <Icon icon="tabler:search" width="24" height="24" />
              </IconButton>
            )}
          </>
        ),
      }}
    />
  );
};
