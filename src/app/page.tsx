import Box from '@/components/Box';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <div className="main">
      <Grid
        direction="row"
        alignContent="center"
        wrap="wrap"
        container
        spacing={3}
        columns={16 % 4}
      >
        <Grid item xs={4} md={4} xl={4}>
          <Box />
        </Grid>
        <Grid item xs={4} md={4} xl={4}>
          <Box />
        </Grid>
        <Grid item xs={4} md={4} xl={4}>
          <Box />
        </Grid>
        <Grid item xs={4} md={4} xl={4}>
          <Box />
        </Grid>
        <Grid item xs={4} md={4} xl={4}>
          <Box />
        </Grid>
        <Grid item xs={4} md={4} xl={4}>
          <Box />
        </Grid>
        {/* <Grid item>
          <Box />
        </Grid>
        <Grid item>
          <Box />
        </Grid>
        <Grid item>
          <Box />
        </Grid> */}
      </Grid>
    </div>
  );
}
