'use client';
import CustomSearchBar from '@/components/atoms/CustomSearchBar';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Typography variant="h1">تست</Typography>
      <Typography variant="h2">تست</Typography>
      <Typography variant="h3">تست</Typography>
      <Typography variant="h4">تست</Typography>
      <Typography variant="body1">تست</Typography>
      <Typography variant="body2">تست</Typography>
      <Typography variant="caption">تست</Typography>
      <Typography variant="button">تست</Typography>
      <Box>
        <CustomSearchBar
          onClick={() => console.log('first')}
          placeholder="جست و جو کنید"
        />
      </Box>
    </>
  );
}
