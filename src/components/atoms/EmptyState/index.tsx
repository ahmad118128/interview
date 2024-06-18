'use client';
import { EmptyStateContainer, EmptyStateImage } from './styled';
import { Typography } from '@mui/material';
import { generalStr } from '@/strings';

const EmptyState = () => {
  return (
    <EmptyStateContainer>
      <EmptyStateImage
        src={'/assets/images/dashboard/Illustration.svg'}
        alt=""
        width={430}
        height={360}
      />
      <Typography variant="body1">{generalStr.noDataFetchingYet}</Typography>
    </EmptyStateContainer>
  );
};

export default EmptyState;
