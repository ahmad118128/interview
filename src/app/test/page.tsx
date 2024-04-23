'use client';
import { BaseInput } from '@/baseComponents/atoms/Input';
import { FieldValues, useForm } from 'react-hook-form';

export default function Test() {
  const { control } = useForm<FieldValues>();
  return <BaseInput name={'test'} control={control} variant="filled" />;
}
