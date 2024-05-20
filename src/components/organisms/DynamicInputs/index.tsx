import React from 'react';
import { useFormContext, Controller, useForm, Control } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { CustomInput } from '@/components/atoms/input/controlledCustomInput';
import { StyledInputContainer } from '@/components/pages/UI/UsersTab/FilterChild/styled';
import ControlledTimeDatePickerInput from '../TimeDatePicker/ControlledTimeDatePicker';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';

export interface InputOption {
  value: string;
  label: string;
}

export interface Input {
  typeInput: 'textField' | 'select' | 'datepicker';
  options?: InputOption[];
  name: string;
  value: string | undefined;
  label?: string | undefined;
  control: any;
}

export interface DynamicInputsProps {
  inputs: Input[];
}

const inputComponents: { [key: string]: React.ComponentType<any> } = {
  textField: CustomInput,
  select: CustomRHFAutocomplete,
  datepicker: ControlledTimeDatePickerInput,
};

const DynamicInputs = ({ inputs }: DynamicInputsProps) => {
  return (
    <>
      {inputs?.map(
        (
          { typeInput, options, name, value, label, control, ...props },
          index
        ) => {
          const InputComponent = inputComponents[typeInput] ?? TextField;
          return (
            <StyledInputContainer item xs={12} md={4} lg={3} key={index}>
              {typeInput === 'select' && (
                <CustomRHFAutocomplete
                  label={label ? label : ''}
                  control={control}
                  name={name}
                  options={options ? options : []}
                  {...props}
                />
              )}
              {typeInput === 'textField' && (
                <CustomInput
                  defaultValue={value}
                  name={name}
                  label={label}
                  control={control}
                  {...props}
                />
              )}
              {typeInput === 'datepicker' && (
                <ControlledTimeDatePickerInput
                  name={name} // Ensure name is correct
                  control={control}
                  label={label ? label : ''}
                  value={0}
                  onChange={() => console.log('first')}
                  rules={{ required: 'Require' }}
                />
              )}
            </StyledInputContainer>
          );
        }
      )}
    </>
  );
};

export default DynamicInputs;
