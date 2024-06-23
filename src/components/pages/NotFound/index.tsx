'use client';

import { CustomButton } from '@/components/atoms/CustomButton';
import { generalStr, messageStr } from '@/strings';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { StyledContainer } from './styled';

const NotFound = () => {
  const router = useRouter();
  return (
    <StyledContainer>
      <Image
        src="/assets/images/Group2.svg"
        width={448}
        height={390}
        alt="Picture of the author"
      />

      <Typography variant="h2" component="h1">
        {messageStr.notFound}
      </Typography>

      <Typography variant="button" component="p">
        {generalStr.RemovedRenamedOrUnavailablePage}{' '}
      </Typography>

      <CustomButton
        variant="contained"
        type="submit"
        onClick={() => router.push('/dashboard')}
      >
        {generalStr.backToDashboard}
      </CustomButton>
    </StyledContainer>
  );
};
export default NotFound;
