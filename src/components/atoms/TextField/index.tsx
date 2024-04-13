'use client';
import {
  cloneElement,
  useState,
  ReactElement,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';
import { InputAdornment } from '@mui/material';

import { Controller } from 'react-hook-form';
import { BaseInputProps, ValidateType } from './type';
import { StyledErrorMessage, StyledTextFieldRtl, StyledToman } from './styled';
import VisibilityIcon from '../SvgIcons/VisibilityIcon';
import VisibilityOffIcon from '../SvgIcons/VisibilityOffIcon';
import regexPattern from '@/helper/regexPattern';
import { generalStr } from '@/strings';
import { convertToCardNumber, convertToPrice } from './utils';

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
  if (validateType === 'cardNumber') {
    return convertToCardNumber(field || '');
  }
  if (validateType === 'money') {
    return convertToPrice(field);
  }
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
      sx={{ mr: '8px' }}
    >
      {state ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </InputAdornment>
  );
};

export const TextField = (props: BaseInputProps) => {
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
            <StyledTextFieldRtl
              id={id}
              variant="filled"
              typeInput={type}
              className={className}
              ltrLabel={ltrLabel}
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
                dir: !ltrValue ? 'auto' : ltrValue,
                ...inputProps,
                endAdornment:
                  validateType === 'money'
                    ? handleAdornment(
                        <StyledToman>{generalStr.toman}</StyledToman>,
                        'end'
                      )
                    : endAdornment && handleAdornment(endAdornment, 'end'),
                startAdornment:
                  type === 'password' && value
                    ? handlePasswordAdornment(statusPssIcon, setStatusPassIcon)
                    : startAdornment &&
                      handleAdornment(startAdornment, 'start'),
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
          <StyledErrorMessage variant="caption">
            {error?.message}
          </StyledErrorMessage>
        </>
      )}
    />
  );
};

export * from './type';
