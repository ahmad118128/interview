import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CustomInput } from '@/components/atoms/input/controlledCustomInput';
import { StyledInputContainer } from '@/components/pages/UI/UsersTab/FilterChild/styled';
import CustomSelect from '@/components/atoms/input/CustomSelect';

interface InputOption {
  value: string;
  label: string;
}

export interface Input {
  typeInput: 'textField' | 'select' | 'datepicker';
  options?: InputOption[];
  name: string;
  value: string | undefined;
}

export interface DynamicInputsProps {
  inputs: Input[];
}

const inputComponents: { [key: string]: React.ComponentType<any> } = {
  textField: CustomInput,
  select: Select,
  // datepicker: DatePicker,
};

const DynamicInputs = ({ inputs }: DynamicInputsProps) => {
  const { control } = useFormContext();

  return (
    <>
      {inputs?.map(({ typeInput, options, name, value, ...props }, index) => {
        const InputComponent = inputComponents[typeInput] ?? TextField;
        return (
          <StyledInputContainer item xs={12} md={4} lg={3} key={index}>
            {typeInput === 'select' && (
              <Controller
                name={name}
                control={control}
                defaultValue={value}
                render={({ field }) => (
                  <CustomSelect {...field} {...props}>
                    {options &&
                      options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                  </CustomSelect>
                )}
              />
            )}
            {typeInput !== 'select' && (
              <InputComponent
                defaultValue={value}
                name={name}
                control={control}
                {...props}
              />
            )}
          </StyledInputContainer>
        );
      })}
    </>
  );
};

export default DynamicInputs;
