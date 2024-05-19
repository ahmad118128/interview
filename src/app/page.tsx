'use client';

import {
  CustomAutocomplete,
  CustomRHFAutocomplete,
} from '@/components/atoms/Autocomplete';
import { CustomTextArea } from '@/components/atoms/CustomTextarea/CustomTextarea';
import { CustomInput } from '@/components/atoms/input/controlledCustomInput';
import { allValidateType } from '@/components/baseComponents/baseInput';
import { BarChart } from '@/components/organisms/Charts/BarChart';
import DoughnutChart from '@/components/organisms/Charts/DoughnutChart';
import LineChart from '@/components/organisms/Charts/LineChart';
import { Typography } from '@mui/material';
import { kMaxLength } from 'buffer';
import { useState } from 'react';
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
