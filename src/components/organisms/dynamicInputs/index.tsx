import React from 'react';
import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CustomInput } from '@/components/atoms/input/controlledCustomInput';

interface InputOption {
  value: string;
  label: string;
}

export interface Input {
  type: 'textField' | 'select' | 'datepicker';
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
  const { register } = useFormContext(); // Get form context from react-hook-form

  return (
    <div>
      {inputs.map(({ type, options, name, value, ...props }, index) => {
        const InputComponent = inputComponents[type] ?? TextField; // Default to TextField if type is not found
        return (
          <InputComponent
            key={index}
            defaultValue={value} // Use defaultValue instead of value for controlled components
            {...register(name)} // Register input with react-hook-form
            name={name}
            {...props}
          >
            {type === 'select' &&
              options &&
              options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </InputComponent>
        );
      })}
    </div>
  );
};

export default DynamicInputs;
