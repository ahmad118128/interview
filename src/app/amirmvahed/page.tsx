'use client';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import DynamicLayout from '../../components/amirmvahed/DynamicLayout';
import CheckBoxes from '@/components/amirmvahed/CheckBoxes';

const Home: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (checkedBoxes: string[]) => {
    setCheckedItems(checkedBoxes);
  };
  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid item xs={10}>
        <DynamicLayout checkedItems={checkedItems} />
      </Grid>
      <Grid item xs={2} sx={{ backgroundColor: '#f0f0f0' }}>
        <CheckBoxes onCheckboxChange={handleCheckboxChange} />
      </Grid>
    </Grid>
  );
};

export default Home;
