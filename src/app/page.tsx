'use client';
import { CustomChip } from '@/components/atoms/Chip/CustomChip/CustomChip';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="button">button</Typography>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'2rem'}}>
        <CustomChip chipSize='medium' label='Label' typeChip='baseChip' />
        <CustomChip chipSize='normal' label='Label' typeChip='baseChip'/>
        <CustomChip chipSize='small' label='Label' typeChip='baseChip'/>
        <CustomChip chipSize='normal' label='Label' typeChip='baseChip' disabled/>

        
      </div>
    </>
  );
}
