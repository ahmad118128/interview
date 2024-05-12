import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAnimation = styled('div')`
  display: flex;
  align-items: center;
  gap: 4px;

  .rod {
    width: 6px;
    height: 18px;
    animation: loading 750ms infinite;
  }

  .rod-1 {
    animation-delay: 2s;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .rod-2 {
    animation-delay: 1s;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .rod-3 {
    animation-delay: 75ms;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  @keyframes loading {
    10% {
      transform: scale(1.3);
    }
    30% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const WaveAnimation = () => (
  <StyledAnimation data-testid="animation">
    <span className="rod rod-1" />
    <span className="rod rod-2" />
    <span className="rod rod-3" />
  </StyledAnimation>
);

type PropsType = { isScreen?: boolean };

export function WaveLoading({ isScreen }: PropsType) {
  return isScreen ? (
    <Box
      display="flex"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <WaveAnimation />
    </Box>
  ) : (
    <WaveAnimation />
  );
}
