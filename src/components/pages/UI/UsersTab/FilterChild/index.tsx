'use client';
import { useState } from 'react';
import { StyledContainer, StyledFilterChild } from './styled';
import DynamicInputs, { Input } from '@/components/organisms/DynamicInputs';
import { useForm } from 'react-hook-form';

export const FilterChild = () => {
  const [error, setError] = useState();
  const { control } = useForm();
  const inputs = [
    {
      typeInput: 'textField',
      name: 'title1',
      value: '',
      label: 'Book Title1',
      fullWidth: true,
      defaultValue: '',
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
    },
    {
      typeInput: 'textField',
      name: 'title2',
      value: '',
      label: 'Book Title2',
      fullWidth: true,
      defaultValue: '',
      setError: setError,
      validatType: 'num',
      control: control,
    },
    {
      typeInput: 'textField',
      name: 'title3',
      value: '',
      label: 'Book Title3',
      fullWidth: true,
      defaultValue: '',
    },

    {
      typeInput: 'datepicker',
      name: 'title4',
      value: '',
      label: 'Book Title',
      // fullWidth: true,
    },
  ] as Input[];

  return (
    <StyledContainer>
      <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
        <DynamicInputs inputs={inputs} />
      </StyledFilterChild>
    </StyledContainer>
  );
};
