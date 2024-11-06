import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

const Layout: React.FC = () => {
  const [selectedBoxes, setSelectedBoxes] = useState<boolean[]>(new Array(16).fill(true)); 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 2 }}> 
        <Main selectedBoxes={selectedBoxes} />
      </Box>
      <Sidebar selectedBoxes={selectedBoxes} setSelectedBoxes={setSelectedBoxes} /> 
      <Footer />
    </Box>
  );
};

export default Layout;
