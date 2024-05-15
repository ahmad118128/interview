import { Box, Typography } from '@mui/material';
import React from 'react';
import { ContainerBox } from './styled';

export default function CustomLegend({ labels }: { labels: string[] }) {
  return (
    <ContainerBox>
      {labels.map((label, index) => (
        <Box key={index}>
          <span></span>
          <Typography>{label}</Typography>
        </Box>
      ))}
    </ContainerBox>
  );
}
