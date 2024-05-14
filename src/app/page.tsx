'use client';

import {
  CustomAutocomplete,
  CustomRHFAutocomplete,
} from '@/components/atoms/Autocomplete';
import { CustomTextArea } from '@/components/atoms/CustomTextarea/CustomTextarea';
import { TextField, Typography } from '@mui/material';
import { kMaxLength } from 'buffer';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { control } = useForm({
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
      <div
        style={{
          marginTop: '20px',
          marginInline: '300px',
        }}
      >
        <CustomAutocomplete
          options={[
            'test1',
            'test2',
            'test3',
            'test4',
            'test5',
            'test6',
            'test7',
            'test8',
          ]}
          multiple
          label="تست"
          dir="rtl"
        />
      </div>
      <div
        style={{
          marginTop: '20px',
          marginInline: '300px',
        }}
      >
        <CustomRHFAutocomplete
          control={control}
          name="test"
          options={[
            { name: 'rtest1', family: '1' },
            { name: 'rtest1', family: '2' },
          ]}
          getOptionLabel={(option) => option.family}
          getOptionValue={(option) => option.family}
          // freeSolo
          multiple
          label="تست"
          dir="rtl"
        />
      </div>
    </>
  );
}
