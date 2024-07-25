'use client';

import { Box, Typography } from '@mui/material';
import { generalStr } from '@/strings';
import { EmptyStateContainer, EmptyStateImage } from './styled';

const EmptyState = () => {
  return (
    <EmptyStateContainer>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      >
        <EmptyStateImage
          src={'/assets/images/dashboard/Illustration.svg'}
          alt="empty state"
          // width={430}
          // height={360}
          fill
        />
        <Typography variant="body1">{generalStr.emptyState}</Typography>
      </Box>
    </EmptyStateContainer>
  );
};

export default EmptyState;
