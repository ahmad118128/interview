'use client';

import { CustomButton } from '@/components/atoms/CustomButton';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { allValidateType } from '@/components/BaseComponents/baseInput/index';
import { DeleteModal } from '@/components/organisms/Modal/DeleteModal.tsx';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    return setOpen(false);
  };

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
      <CustomButton onClick={() => setOpen(true)}>openModal</CustomButton>
      <DeleteModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        title="آیا برای حذف نام‌ و نام‌خانوادگی مطمئن هستید ؟"
        buttons
      />
    </>
  );
}
