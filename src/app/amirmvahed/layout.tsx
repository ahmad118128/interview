import React from 'react';
import { Box, Grid } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item xs={2} sx={{ backgroundColor: '#f0f0f0' }}>
        <Box sx={{ padding: 2, height: '100%' }}>Sidebar Left</Box>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <Box sx={{ flexGrow: 1, padding: 2 }}>{children}</Box>
        <Box sx={{ backgroundColor: '#f0f0f0', padding: 2 }}>Footer</Box>
      </Grid>
    </Grid>
  );
};

export default Layout;
