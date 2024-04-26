'use client';
import CustomSearchBar from '@/components/atoms/SearchBar/CustomSearchBar';
import { Box, Typography } from '@mui/material';

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
      <Box>
        <CustomSearchBar
          onChange={() => console.log('first')}
          placeholder="جست و جو کنید"
        />
      </Box>
    </>
  );
}
