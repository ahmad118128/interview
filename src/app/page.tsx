'use client';
import CustomSearchBar from '@/components/atoms/CustomSearchBar';
import { Box, Typography } from '@mui/material';
import { CustomTooltip } from '@/components/atoms/CustomTooltip';

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
          searchHandler={(e) => console.log(e)}
          placeholder="جست و جو کنید"
        />
      </Box>
      <CustomTooltip arrow title="title" placement="bottom-end" open>
        <div>BaseTooltip</div>
      </CustomTooltip>
    </>
  );
}
