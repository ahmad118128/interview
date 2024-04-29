'use client';
import { CustomChip } from '@/components/atoms/CustomChip/CustomChip';
import { Typography } from '@mui/material';

export default function Home() {
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
        <CustomChip chipSize="normal" typeChip="baseChip" label="LABEL" />
      </div>
    </>
  );
}
