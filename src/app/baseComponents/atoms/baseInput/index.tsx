'use client';
import {
  cloneElement,
  useState,
  ReactElement,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';
import { InputAdornment, TextField, Typography } from '@mui/material';

import { Controller } from 'react-hook-form';
import { BaseInputProps, ValidateType } from './type';
import regexPattern from '@/helper/regexPattern';
import VisibilityIcon from '@/components/atoms/SvgIcons/VisibilityIcon';
import VisibilityOffIcon from '@/components/atoms/SvgIcons/VisibilityOffIcon';
import UploadFileIcon from '@/components/atoms/SvgIcons/UploadFileIcon';

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

const handleValidateValue = (field: string, validateType?: ValidateType) => {
  // if (validateType === 'cardNumber') {
  //   return convertToCardNumber(field || '');
  // }
  // if (validateType === 'money') {
  //   return convertToPrice(field);
  // }
  return field;
};

const handleAdornment = (icon: ReactElement, position: 'start' | 'end') => {
  const margin = position === 'start' ? { ml: '8px' } : { mr: '8px' };
  return (
    <InputAdornment position={position} {...margin}>
      {icon}
    </InputAdornment>
  );
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
      sx={{ ml: '8px' }}
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
    variant,
    setError,
    id,
    inputProps,
    inputBaseProps,
    changeMiddleWare,
    size,
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
          {!element ? (
            <TextField
              style={{
                fontSize: type === 'file' && value ? '16px' : '0px',
              }}
              id={id}
              size={size}
              variant={variant ? variant : 'outlined'}
              className={className}
              label={rules?.required ? `${label} *` : label}
              error={error?.message ? true : false}
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
              value={handleValidateValue(value, validateType)}
              inputProps={inputBaseProps}
              InputProps={{
                // dir: !ltrValue ? 'auto' : ltrValue,
                ...inputProps,
                endAdornment:
                  type === 'password'
                    ? value
                      ? handlePasswordAdornment(
                          statusPssIcon,
                          setStatusPassIcon
                        )
                      : endAdornment && handleAdornment(endAdornment, 'end')
                    : type === 'file' &&
                      handleAdornment(<UploadFileIcon />, 'end'),
              }}
              {...rest}
            />
          ) : (
            cloneElement(element, {
              ...rest,
              label,
              error: error?.message ? true : false,
              value,
              type:
                type === 'password'
                  ? statusPssIcon
                    ? 'password'
                    : 'text'
                  : type,
              InputProps: {
                endAdornment:
                  type === 'password' && value
                    ? handlePasswordAdornment(statusPssIcon, setStatusPassIcon)
                    : endAdornment && endAdornment,
                startAdornment: startAdornment && startAdornment,
              },
            })
          )}
          <Typography variant="caption">{error?.message}</Typography>
        </>
      )}
    />
  );
};

export * from './type';
