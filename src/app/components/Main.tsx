import React from 'react';
import { Box, Grid, Toolbar } from '@mui/material';

interface MainProps {
  selectedBoxes: boolean[];
}

const Main: React.FC<MainProps> = ({ selectedBoxes }) => {
  
  const activeBoxesCount = selectedBoxes.filter(selected => selected).length;

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Grid container spacing={2}>
        
        {[...Array(16)].map((_, index) => (
          selectedBoxes[index] && ( 
            <Grid
              item
              xs={activeBoxesCount >= 2 && index === 1 ? 6 : (activeBoxesCount >= 3 ? 3 : (index === 0 || index === 1 ? 12 : 6))}  // باکس اول و دوم نصف صفحه، بعد از آن 25% عرض
              sm={activeBoxesCount >= 2 && index === 1 ? 6 : (activeBoxesCount >= 3 ? 3 : (index === 0 || index === 1 ? 12 : 6))}
              md={activeBoxesCount >= 3 ? 3 : (index === 0 || index === 1 ? 12 : 6)} 
              lg={activeBoxesCount >= 3 ? 3 : (index === 0 || index === 1 ? 12 : 6)}
              key={index}
            >
              <Box
                sx={{
                  backgroundColor: '#BFD641',
                  padding: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: activeBoxesCount >= 3 ? 150 : (index === 0 || index === 1 ? 'calc(100vh - 64px)' : 150),
                  borderRadius: 2,
                }}
              >
                <Box sx={{ color: 'white', fontWeight: 'bold' }}>
                  {`Box ${index + 1}`}
                </Box>
              </Box>
            </Grid>
          )
        ))}
      </Grid>
    </Box>
  );
};

export default Main;
