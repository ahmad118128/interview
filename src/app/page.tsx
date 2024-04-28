'use client';

import { Typography } from '@mui/material';
import { CustomFabButton } from '@/components/atoms/FabButton/CustomFabButton/CustomFabButton';

export default function Home() {
  function handleClick() {
    console.log('e');
  }
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <CustomFabButton size="large" icon onClick={handleClick} />
        <CustomFabButton size="medium" icon onClick={handleClick} />
        <CustomFabButton size="small" icon onClick={handleClick} />
        <CustomFabButton disabled icon onClick={handleClick} />
      </div>
    </>
  );
}
