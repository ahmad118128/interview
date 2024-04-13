'use client';
import { TextField } from '@/components/atoms/TextField';
import { FieldValues, useForm } from 'react-hook-form';

export default function Home() {
  const { control } = useForm<FieldValues>();
  return (
    <>
      <p>main page</p>
      <form>
        <TextField
          name="firstName"
          type="money"
          validateType="money"
          control={control}
          className='text-red'
          label='اسم'
        />
      </form>
    </>
  );
}
