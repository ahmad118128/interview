'use client';

import { CustomTextArea } from '@/components/atoms/CustomTextarea/CustomTextarea';
import { BarChart } from '@/components/organisms/Charts/BarChart';
import DoughnutChart from '@/components/organisms/Charts/DoughnutChart';
import LineChart from '@/components/organisms/Charts/LineChart';
import { Typography } from '@mui/material';
import { kMaxLength } from 'buffer';
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
      <BarChart
        labels={['January', 'February', 'March', 'April']}
        data={[
          { label: 'مرد', data: [120, 130, 140, 15] },
          { label: 'زن', data: [30, 40, 50, 120] },
        ]}
        legend={true}
      />
      <BarChart
        labels={['January', 'February', 'March', 'April']}
        data={[{ label: 'مرد', data: [120, 130, 140, 15] }]}
      />
      <DoughnutChart
        chartLabel="Clinet"
        labels={['زن', 'مرد']}
        data={[120, 80]}
      />
      <LineChart
        labels={['January', 'February', 'March', 'April']}
        data={[0, 120, 40, 90]}
      />
    </>
  );
}
