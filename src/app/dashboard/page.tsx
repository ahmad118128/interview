'use client';
import { TextField } from '@/components/atoms/TextField';
import InputFileUpload from '@/components/atoms/UploadInput';
import { FieldValues, useForm } from 'react-hook-form';

export default function Dashboard() {
  const { control } = useForm<FieldValues>();
  return (
    <>
      <p>main page</p>
      <form>
        <TextField
          name="firstName"
          type="text"
          validateType="en"
          control={control}
          label="اسم"
        />
        <TextField
          name="firstName"
          type="password"
          validateType="en"
          control={control}
          label="رمز"
        />
        <InputFileUpload />
      </form>
    </>
  );
}
