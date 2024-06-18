'use client';

import { CustomButton } from '@/components/atoms/CustomButton';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
export default function Custom404() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        height: '100vh',
      }}
    >
      <Image
        src="/Group2.svg"
        width={448}
        height={390}
        alt="Picture of the author"
      />
      <Typography variant="h2" component="h1">
        صحفه‌ی مورد نظر یافت نشد.
      </Typography>
      <Typography variant="button" component="p">
        صفحه ای که به دنبال آن می گردید ممکن است است حذف شده باشد، نام آن تغییر
        کرده باشد و یا موقتا در دسترس نباشد.
      </Typography>
      <CustomButton variant="contained" type="submit">
        بازگشت به داشبورد
      </CustomButton>
    </Box>
  );
}
