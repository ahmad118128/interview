'use client';

import { CustomRadioButton } from '@/components/atoms/CustomRadioButton';
import CustomModal from '@/components/organisms/Modal';
import { message } from '@/strings';
import { Button } from '@mui/material';
import { SetStateAction, useState } from 'react';
import { Form, useForm } from 'react-hook-form';

type FormInputs = {
  data: string;
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const { control, register, handleSubmit } = useForm();

  function submitHandler({ data }: any) {
    console.log(data);
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <form onSubmit={handleSubmit(submitHandler)}>
          <CustomRadioButton
            control={control}
            rules={{ required: true }}
            name={'data'}
          />
          <input type="submit" />
        </form>
      </div>
      <Button onClick={handleOpen}>Open modal</Button>
      <CustomModal open={open} setOpen={setOpen} />
    </>
  );
}
