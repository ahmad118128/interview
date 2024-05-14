'use client';
import DynamicInputs from '@/components/organisms/dynamicInputs';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Input } from '@/components/organisms/dynamicInputs';

const BookForm: React.FC = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const inputs = [
    {
      typeInput: 'textField',
      name: 'title',
      value: '',
      label: 'Book Title',
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
  ] as Input[];

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DynamicInputs inputs={inputs} />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default BookForm;
