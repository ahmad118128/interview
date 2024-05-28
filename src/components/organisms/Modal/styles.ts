import { Box, styled } from '@mui/material';

export const StyledCustomModal = styled(Box)`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  background: ${({ theme }) => theme.palette.grey[50]};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
