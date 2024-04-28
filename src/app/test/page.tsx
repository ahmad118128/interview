'use client';
import { FieldValues, useForm } from 'react-hook-form';
import { BaseInput } from '@/components/baseComponents/baseInput';

export default function Test() {
  const { control } = useForm<FieldValues>();
  return <BaseInput name={'test'} variant="filled" />;
}
