import { Controller } from 'react-hook-form';
import {
  RadioButtonContainer,
  RadioButtonLabelHolder,
  StyledRadioButton,
} from './styled';
import { Box, RadioGroup, Typography } from '@mui/material';
import { ICustomRadio } from './type';
import { generalStr } from '@/strings';

export const CustomRadioButton = (props: ICustomRadio) => {
  const { groupData, control, rules, name, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <RadioButtonContainer>
            {groupData?.map((item) => {
              return (
                <RadioButtonLabelHolder key={item.id}>
                  <StyledRadioButton
                    {...rest}
                    {...field}
                    value={item.name}
                    key={item.id}
                    name={item.name}
                    disabled={item.disabled}
                    error={error}
                    checked={item.checked}
                  />
                  <Typography variant="h3">{item.label}</Typography>
                </RadioButtonLabelHolder>
              );
            })}
          </RadioButtonContainer>
        );
      }}
    />
  );
};
