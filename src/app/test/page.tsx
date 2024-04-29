'use client';
import { Grid } from '@mui/material';
import { CustomButton } from '@/components/atoms/customButton';

export default function Test() {
  return (
    <Grid container sx={{ padding: '1rem' }} rowSpacing={5}>
      <Grid item xs={4}>
        <CustomButton variant="contained" size="large">
          لیبل
        </CustomButton>
      </Grid>
      <Grid item xs={4}>
        <CustomButton variant="contained" loading>
          لیبل
        </CustomButton>
      </Grid>
      <Grid item xs={4}>
        <CustomButton variant="contained" size="large" disabled>
          لیبل
        </CustomButton>
      </Grid>
      <Grid item xs={4}>
        <CustomButton variant="outlined" size="large">
          لیبل
        </CustomButton>
      </Grid>
      <Grid item xs={4}>
        <CustomButton variant="outlined" loading>
          لیبل
        </CustomButton>
      </Grid>
      <Grid item xs={4}>
        <CustomButton variant="outlined" size="large" disabled>
          لیبل
        </CustomButton>
      </Grid>
      <Grid item xs={4}>
        <CustomButton title="test" className="loginButton">
          لیبل
        </CustomButton>
      </Grid>
      <Grid item xs={4}>
        <CustomButton title="test" className="loginButton" loading>
          لیبل
        </CustomButton>
      </Grid>
    </Grid>
  );
}
