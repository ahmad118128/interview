import { Box, Typography } from '@mui/material';
import React from 'react';
import { ContainerBox } from './styled';

type CustomLegendProps = { labels: string[] };

export default function CustomLegend({ labels }: CustomLegendProps) {
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
