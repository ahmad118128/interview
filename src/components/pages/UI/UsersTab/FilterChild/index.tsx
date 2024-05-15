'use client';
import { StyledContainer, StyledFilterChild } from './styled';
import DynamicInputs, { Input } from '@/components/organisms/dynamicInputs';

export const FilterChild = () => {
  const inputs = [
    {
      typeInput: 'textField',
      name: 'title',
      value: '',
      label: 'Book Title',
      fullWidth: true,
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
    },

    {
      typeInput: 'textField',
      name: 'title1',
      value: '',
      label: 'Book Title',
      fullWidth: true,
    },

    {
      typeInput: 'textField',
      name: 'title2',
      value: '',
      label: 'Book Title',
      fullWidth: true,
    },

    {
      typeInput: 'datepicker',
      name: 'title3',
      value: '',
      label: 'Book Title',
      fullWidth: true,
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
