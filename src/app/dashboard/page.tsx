'use client';
import SelectVariants from '@/components/atoms/DropDownInput';
// import DropDownInput from '@/components/atoms/DropDownInput';
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
          validateType="fa"
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
        <SelectVariants />
      </form>
    </>
  );
}
