import { Controller } from 'react-hook-form';
import { RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';
import { BaseInputRadio } from './type';
import { StyledErrorMessage } from './styled';
import { useState } from 'react';

export const BaseRadioButton = (props: BaseInputRadio) => {
  const { control, name, defaultValue, rules, label, className, ...rest } =
    props;
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className={className}>
      <Radio {...rest} inputProps={{ 'aria-label': 'B' }} />
    </div>
  );
};
