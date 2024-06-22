import React, { useState } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { InputAdornment, IconButton, TextField } from '@mui/material';
import VisibilityIcon from '../SvgIcons/VisibilityIcon';
import VisibilityOffIcon from '../SvgIcons/VisibilityOffIcon';

import { TCustomInput } from './type';
import { UnControlledCustomInput } from './CustomInput';

export function CustomPasswordInput<TField extends FieldValues>(
  props: TCustomInput<TField>
) {
  const { name, control, rules, value, InputProps } = props;
  const [showPassword, setShowPassword] = useState(false);

  const isValuePresent = !!value;

  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const renderPasswordAdornment = () => {
    const visibilityIcon = showPassword ? (
      <VisibilityOffIcon />
    ) : (
      <VisibilityIcon />
    );
    return (
      <InputAdornment position="end">
        <IconButton onClick={handleTogglePassword}>{visibilityIcon}</IconButton>
      </InputAdornment>
    );
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <UnControlledCustomInput
          {...field}
          {...props}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: renderPasswordAdornment(),
            ...InputProps,
          }}
        />
      )}
    />
  );
}
