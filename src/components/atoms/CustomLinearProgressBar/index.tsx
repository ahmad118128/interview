import { Box } from '@mui/material';
import { StyledLinearProgressBar } from './styled';
import { useState } from 'react';

export default function CustomLinearProgressBar() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        margin: '0px !important',
        marginTop: '1rem !important',
      }}
    >
      <StyledLinearProgressBar variant="determinate" value={70} />
    </Box>
  );
}
