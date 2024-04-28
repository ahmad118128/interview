'use client';
import { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { BaseInputProps } from './type';
import regexPattern from '@/helper/regexPattern';

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

export const BaseInput = (props: BaseInputProps) => {
  const { validateType, setError, name, ...rest } = props;
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    onChange: any
  ) => {
    if (
      !validateType ||
      !e.target.value ||
      e.target.value.match(allValidateType[validateType].value)
    ) {
      onChange(e);
    } else {
      setError?.(name ? name : '', {
        message: allValidateType[validateType].message,
        type: 'manual',
      });
    }
  };

  return (
    <TextField
      {...rest}
      onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        onChangeHandler(e, props.onChange)
      }
    />
  );
};

export * from './type';
