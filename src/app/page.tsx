'use client';

import { CustomFabButton } from '@/components/atoms/FabButton/CustomFabButton/CustomFabButton';
import { Typography } from '@mui/material';

export default function Home() {

  function handleClick () {
    console.log('e')
  }
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

      <div
        style={{
          display: 'flex',
          flexDirection : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem'
        }}
      >
        <CustomFabButton  size="large" icon onClick={handleClick}   />
        <CustomFabButton  size="medium" icon onClick={handleClick}   />
        <CustomFabButton  size="small" icon onClick={handleClick}   />
        <CustomFabButton  disabled icon onClick={handleClick}   />
        
      </div>
    </>
  );
}
