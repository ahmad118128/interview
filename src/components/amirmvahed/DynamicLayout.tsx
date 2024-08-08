'use client';

import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';

const handleColumns = (num: number) => {
  if (num <= 1) return 1;
  if (num <= 4) return 2;
  if (num <= 9) return 3;
  return 4;
};

const DynamicLayout: React.FC = () => {
  const [boxes, setBoxes] = React.useState<number>(1);
  const [columns, setColumns] = React.useState<number>(1);

  useEffect(() => {
    setColumns(handleColumns(boxes));
  }, [boxes]);

  return (
    <>
      <Button
        sx={{ bgcolor: 'green' }}
        onClick={() => setBoxes((prevState) => prevState + 1)}
      >
        Increase
      </Button>
      <Button
        sx={{ bgcolor: 'red' }}
        onClick={() => setBoxes((prevState) => prevState - 1)}
      >
        Decrease
      </Button>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        {Array.from({ length: boxes }).map((_, index) => (
          <Grid
            item
            xs={12 / columns}
            key={'box-' + index}
            sx={{ height: `calc(100% / ${Math.ceil(boxes / columns)})` }}
          >
            <Box
              sx={{
                bgcolor: 'lightblue',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 1,
              }}
            >
              Box {index + 1}
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DynamicLayout;
