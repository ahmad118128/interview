import { Controller } from 'react-hook-form';
import { StyledRadioButton } from './styled';
import { RadioGroup } from '@mui/material';

export const CustomRadioButton = (props: any) => {
  const { control, disabled, rules, label, name } = props;

  const radioItem = [
    { name: 'item1', id: 1 },
    { name: 'item2', id: 2 },
    { name: 'item3', id: 3, checked: true },
    { name: 'item4', id: 4, disabled: true, checked: true },
    { name: 'item4', id: 4, readOnly: true },
  ];
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <RadioGroup>
              {radioItem.map((item, index) => {
                return (
                  <StyledRadioButton
                    {...field}
                    value={item.name}
                    key={item.id}
                    name={item.name}
                    control={control}
                    disabled={item.disabled}
                    rules={rules}
                    label={label}
                    error={error}
                    checked={item.checked}
                  />
                );
              })}
            </RadioGroup>
          </>
        );
      }}
    />
  );
};
