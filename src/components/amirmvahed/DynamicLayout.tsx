import React from 'react';
import { Box, Grid } from '@mui/material';

const handleColumns = (num: number) => {
  if (num <= 1) return 1;
  if (num <= 4) return 2;
  if (num <= 9) return 3;
  return 4;
};

interface DynamicLayoutProps {
  checkedItems: string[];
}
const getColumns = (num: number) => {
  if (num <= 1) return 1;
  if (num <= 4) return 2;
  if (num <= 9) return 3;
  return 4;
};

const DynamicLayout: React.FC<DynamicLayoutProps> = ({ checkedItems }) => {
  const numBoxes = checkedItems.length;

  const columns = getColumns(numBoxes);
  const rows = Math.ceil(numBoxes / columns);

  return (
    <Grid container spacing={2} sx={{ height: 'calc(100vh - 40px)' }}>
      {' '}
      {/* Adjust 40px to account for the footer height */}
      {checkedItems.map((id, index) => (
        <Grid
          item
          xs={12 / columns}
          key={index}
          sx={{ height: `calc(100% / ${rows})` }}
        >
          <Box
            sx={{
              backgroundColor: 'lightblue',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #000',
            }}
          >
            {id.replace('checkbox-', 'Box ')}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default DynamicLayout;
