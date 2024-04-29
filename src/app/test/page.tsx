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
    <Grid
      container
      sx={{ padding: '1rem', justifyContent: 'space-between' }}
      rowSpacing={5}
      gap={2}
    >
      <Grid item xs={0.5}>
        <IconTitle
          title={'دشبورد'}
          icon="material-symbols:home-outline-rounded"
          open={false}
        />
      </Grid>
      <Grid item xs={0.5}>
        <IconTitle
          title={'بانک اطلاعاتی'}
          icon="material-symbols:database"
          open={false}
        />
      </Grid>
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
