'use client';
import { Button } from '@/components/atoms/customButton';
import { Grid } from '@mui/material';

export default function Test() {
  return (
    <Grid container sx={{ padding: '1rem' }} rowSpacing={4}>
      <Grid item xs={4}>
        <Button variant="contained" size="large">
          لیبل
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" loading>
          لیبل
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" size="large" disabled>
          لیبل
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" size="large">
          لیبل
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" loading>
          لیبل
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" size="large" disabled>
          لیبل
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button title="test" className="loginButton">
          لیبل
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button title="test" className="loginButton" loading>
          لیبل
        </Button>
      </Grid>
    </Grid>
  );
}
