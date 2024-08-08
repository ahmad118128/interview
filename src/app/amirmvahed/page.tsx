import React from 'react';
import { Container } from '@mui/material';
import DynamicLayout from '../../components/amirmvahed/DynamicLayout';

const Home: React.FC = () => {
  return (
    <Container sx={{ height: '100%' }}>
      <DynamicLayout />
    </Container>
  );
};

export default Home;
