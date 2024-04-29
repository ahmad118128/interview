'use client';
import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { IconTitle } from '@/components/organism/sidebar/iconTitle';

export default function Test() {
  const [active, setActive] = useState('');
  function handleChange() {
    setActive('active');
  }
  return (
    <Grid container sx={{ padding: '1rem' }} rowSpacing={5}>
      <Grid item xs={4}>
        <IconTitle
          title={'دشبورد'}
          icon="material-symbols:home-outline-rounded"
          open={true}
          className={active}
          onClick={handleChange}
        />
      </Grid>
    </Grid>
  );
}
