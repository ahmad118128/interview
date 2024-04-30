'use client';
import { SideBarItem } from '@/components/organism/sideBar/SideBarItem';
import { Grid } from '@mui/material';
import { useState } from 'react';

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
        <SideBarItem
          title="دشبورد"
          icon="material-symbols:home-rounded"
          open={false}
        />
      </Grid>

      <Grid item xs={0.5}>
        <SideBarItem
          title="بانک اطلاعاتی"
          icon="material-symbols:database"
          open={false}
        />
      </Grid>

      <Grid item xs={4}>
        <SideBarItem
          title="دشبورد"
          icon="material-symbols:home-rounded"
          open={true}
          className={active}
          onClick={handleChange}
        />
      </Grid>
    </Grid>
  );
}
