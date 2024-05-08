import { Controller } from 'react-hook-form';
import { StyledRadioButton } from './styled';
import { RadioGroup } from '@mui/material';
import { ICustomRadio } from './type';

export const CustomRadioButton = (props: ICustomRadio) => {
  const { control, rules, label, name } = props;

  const radioItem = [
    { name: 'item1', id: 1 },
    { name: 'item2', id: 2 },
    { name: 'item3', id: 3, checked: true },
    { name: 'item4', id: 4, disabled: true, checked: true },
    { name: 'item4', id: 5, readOnly: true },
  ];
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <RadioGroup>
            {radioItem.map((item) => {
              return (
                <StyledRadioButton
                  {...field}
                  value={item.name}
                  key={item.id}
                  name={item.name}
                  disabled={item.disabled}
                  label={label}
                  error={error}
                  checked={item.checked}
                />
              );
            })}
          </RadioGroup>
        );
      }}
    />
  );
};
