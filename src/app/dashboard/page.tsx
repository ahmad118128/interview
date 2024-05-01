'use client';
import { Box } from '@mui/material';

export default function Dashboard() {
  return (
    <div
      style={{
        background: 'yellow',
        padding: '7px',
        width: '100%',
        border: '2px solid #ff0',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'nowrap',
      }}
    >
      <p>test components page</p>
      <Box
        sx={{ width: '700px', height: '800px', backgroundColor: 'grey' }}
      ></Box>
      <Box
        sx={{ width: '700px', height: '800px', backgroundColor: 'grey' }}
      ></Box>
      <Box
        sx={{ width: '700px', height: '800px', backgroundColor: 'grey' }}
      ></Box>
    </div>
  );
}
