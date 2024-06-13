'use client';
import { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import regexPattern from '@/helper/regexPattern';
import { BaseInputProps } from '@/components/BaseComponents/baseInput/type';

export const allValidateType = {
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
  const { ...rest } = props;
  return <TextField {...rest} />;
};
