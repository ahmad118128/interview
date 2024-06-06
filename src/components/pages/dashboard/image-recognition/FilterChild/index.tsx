'use client';
import { useState } from 'react';
import { StyledContainer, StyledFilterChild } from './styled';
import DynamicInputs, { Input } from '@/components/organisms/DynamicInputs';
import { useForm, useFormContext } from 'react-hook-form';
import { allValidateType } from '@/components/BaseComponents/baseInput/index';

export const FilterChild = ({ control }: { control: Control<TField> }) => {
  const [error, setError] = useState();

  const inputs = [
    {
      typeInput: 'textField',
      name: 'title1',
      value: '',
      label: 'Book Title1',
      fullWidth: true,
      defaultValue: '',
      control: control,
    },
    {
      typeInput: 'select',
      name: 'genre',
      value: '',
      options: [
        { value: 'fiction', label: 'Fiction' },
        { value: 'non-fiction', label: 'Non-Fiction' },
        { value: 'mystery', label: 'Mystery' },
      ],
      getOptionLabel: (option: { value: any }) => option.value,
      getOptionValue: (option: { value: any }) => option.value,
      multiple: true,
      label: 'تست',
      style: {
        width: '100%',
        height: '100%',
      },
      control: control,
    },
    {
      typeInput: 'textField',
      label: 'Book Title2',
      fullWidth: true,
      defaultValue: '',
      control: control,
      name: 'testing',
      rules: {
        pattern: allValidateType.num,
      },
    },
    {
      typeInput: 'textField',
      name: 'title3',
      value: '',
      label: 'Book Title3',
      fullWidth: true,
      defaultValue: '',
      control: control,
    },

    {
      typeInput: 'datepicker',
      name: 'title4',
      value: '',
      label: 'Book Title',
      control: control,
    },
  ] as unknown as Input[];

  return (
    <StyledContainer>
      <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
        <DynamicInputs inputs={inputs} />
      </StyledFilterChild>
    </StyledContainer>
  );
};
