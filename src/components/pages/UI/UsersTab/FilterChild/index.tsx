'use client';
import { StyledContainer, StyledFilterChild } from './styled';
import DynamicInputs, { Input } from '@/components/organisms/DynamicInputs';
import { useFormContext } from 'react-hook-form';

export const FilterChild = () => {
  const { control } = useFormContext(); // Use useFormContext to access form methods

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
    },
    {
      typeInput: 'textField',
      type: 'number',
      name: 'title2',
      value: '',
      label: 'Book Title2',
      fullWidth: true,
      defaultValue: '',
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
      <StyledFilterChild container spacing={{ xs: 0, md: 6 }}>
        <DynamicInputs inputs={inputs} />
      </StyledFilterChild>
    </StyledContainer>
  );
};
