import { Radio } from '@mui/material';
import { BaseInputRadio } from './type';
import { useState } from 'react';

export const BaseRadioButton = (props: BaseInputRadio) => {
  const { className, ...rest } = props;

  return (
    <div className={className}>
      <Radio {...rest} inputProps={{ 'aria-label': 'B' }} />
    </div>
  );
};
