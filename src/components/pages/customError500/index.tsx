'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Error500 from '../../../../public/Error500.png';
import { Error500PageStr } from '@/strings';
import { CustomButton } from '@/components/atoms/CustomButton';
import { useRouter } from 'next/navigation';
import { StyledBox, StyledContainer, StyledImageContainer } from './styled';

const ErrorPage500 = () => {
  const router = useRouter();
  return (
    <StyledContainer>
      <StyledBox>
        <StyledImageContainer>
          <Image
            src={Error500}
            alt="Error500"
            layout="fill"
            objectFit="contained"
          />
        </StyledImageContainer>
        <Box
          sx={{
            display: 'flex',
            alignSelf: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Typography variant="button">
            {Error500PageStr.problemOccurred}
          </Typography>
          <Typography
            component={'ul'}
            sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <Typography variant="body1">
              {Error500PageStr.solveTheProblem}
            </Typography>
            <Typography variant="body1" component="li">
              {Error500PageStr.problemSolution1}
            </Typography>
            <Typography variant="body1" component="li">
              {Error500PageStr.problemSolution2}
            </Typography>
            <Typography variant="body1" component="li">
              {Error500PageStr.problemSolution3}
            </Typography>
          </Typography>
          <CustomButton
            variant="contained"
            onClick={() => router.push('/dashboard')}
          >
            {Error500PageStr.bottomTitle}
          </CustomButton>
        </Box>
      </StyledBox>
    </StyledContainer>
  );
};

export default ErrorPage500;
