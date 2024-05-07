'use client';

import { CustomTextArea } from '@/components/atoms/CustomTextarea/CustomTextarea';
import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { control } = useForm({
    mode: 'onChange',
  });

  return (
    <>
      <Typography variant="h1">تست</Typography>
      <Typography variant="h2">تست</Typography>
      <Typography variant="h3">تست</Typography>
      <Typography variant="h4">تست</Typography>
      <Typography variant="body1">تست</Typography>
      <Typography variant="body2">تست</Typography>
      <Typography variant="caption">تست</Typography>
      <Typography variant="button">تست</Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CustomTextArea
          name="ss"
          placeholder="ssss"
          control={control}
          label="label"
        />
      </div>
    </>
  );
}
