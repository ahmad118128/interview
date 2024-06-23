'use client';

import { CustomButton } from '@/components/atoms/CustomButton';
import { generalStr, messageStr } from '@/strings';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  StyledContainer,
  StyledImageContainer,
  StyledText,
  StyledTitle,
} from './styled';

const NotFound = () => {
  const router = useRouter();

  return (
    <StyledContainer>
      <StyledImageContainer>
        <Image
          src="/assets/images/Group2.svg"
          alt="Picture of the author"
          layout="fill"
          objectFit="contained"
        />
      </StyledImageContainer>

      <StyledTitle component="h1">{messageStr.notFound}</StyledTitle>

      <StyledText component="p">
        {generalStr.RemovedRenamedOrUnavailablePage}{' '}
      </StyledText>

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
