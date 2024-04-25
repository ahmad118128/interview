'use client';
import {
  useState,
  ReactElement,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';
import { Grid, InputAdornment, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { BaseInputProps, ValidateType } from './type';
import regexPattern from '@/helper/regexPattern';
import VisibilityIcon from '@/components/atoms/SvgIcons/VisibilityIcon';
import VisibilityOffIcon from '@/components/atoms/SvgIcons/VisibilityOffIcon';
import UploadFileIcon from '@/components/atoms/SvgIcons/UploadFileIcon';
import { StyledErrorMessage } from '@/components/atoms/customInput/styled';

const allValidateType = {
  en: regexPattern.englishLetter,
  fa: regexPattern.farsiLetter,
  num: regexPattern.numbers,
  en_spc: regexPattern.en_spc,
  fa_spc: regexPattern.fa_spc,
  money: regexPattern.price,
  cardNumber: regexPattern.cardNumber,
  enCharacters: regexPattern.onlyEnglishNdOtherCharacters,
};

const handleAdornment = (icon: ReactElement) => {
  return <InputAdornment position="end">{icon}</InputAdornment>;
};

const handlePasswordAdornment = (
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>
) => {
  return (
    <InputAdornment
      onClick={() => setState(!state)}
      position="start"
      className="pointer"
    >
      {state ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </InputAdornment>
  );
};

export const BaseInput = (props: BaseInputProps) => {
  const {
    control,
    rules,
    name,
    element,
    type,
    ltrValue,
    ltrLabel,
    endAdornment,
    startAdornment,
    defaultValue = '',
    label,
    validateType,
    className,
    setError,
    id,
    inputProps,
    inputBaseProps,
    changeMiddleWare,
    variant,
    ...rest
  } = props;
  const [statusPssIcon, setStatusPassIcon] = useState(true);
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    onChange: any
  ) => {
    if (
      !validateType ||
      !e.target.value ||
      e.target.value.match(allValidateType[validateType].value)
    ) {
      if (changeMiddleWare instanceof Function) {
        e = changeMiddleWare(e);
      }
      onChange(e);
    } else {
      setError?.(name, {
        message: allValidateType[validateType].message,
        type: 'manual',
      });
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                id={id}
                variant={variant ? variant : 'outlined'}
                className={className}
                label={rules?.required ? `${label} *` : label}
                error={!!error?.message}
                type={
                  type === 'password'
                    ? statusPssIcon
                      ? 'password'
                      : 'text'
                    : type
                }
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => onChangeHandler(e, onChange)}
                value={value}
                inputProps={inputBaseProps}
                InputProps={{
                  ...inputProps,
                  endAdornment:
                    (type === 'password' &&
                      value &&
                      handlePasswordAdornment(
                        statusPssIcon,
                        setStatusPassIcon
                      )) ||
                    (type === 'file' && handleAdornment(<UploadFileIcon />)) ||
                    (endAdornment && handleAdornment(endAdornment)),
                }}
                {...rest}
              />
            </Grid>
            <Grid item xs={6}>
              {error?.message && (
                <StyledErrorMessage variant="caption">
                  {error?.message}
                </StyledErrorMessage>
              )}
            </Grid>
          </Grid>
        </>
      )}
    />
  );
};

export * from './type';
