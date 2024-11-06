import React from 'react';
import { Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        height: '80px',
        p: 2,
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#BAECA7',
        textAlign: 'center',
        zIndex: 1000,
        
      }}
    >
    </Box>
  );
};

export default Footer;
