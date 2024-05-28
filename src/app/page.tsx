'use client';

import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { allValidateType } from '@/components/BaseComponents/baseInput';
import { FieldValues, useForm } from 'react-hook-form';

export default function Home() {
  const { control, setError } = useForm<FieldValues>({
    mode: 'onChange',
  });

  const test = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
  ];

  return (
    <>
      <form action="">
        <CustomInput
          control={control}
          name="testing"
          rules={{
            pattern: allValidateType.num,
          }}
        />
      </form>
    </>
  );
}
