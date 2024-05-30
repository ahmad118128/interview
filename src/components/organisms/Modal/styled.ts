import { Box, Button, Typography, styled } from '@mui/material';

export const StyledCustomModal = styled(Box)`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  background: ${({ theme }) => theme.palette.grey[50]};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
`;

export const StyledDeleteButtonBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledDeleteButton = styled(Button)`
  border: none;
  align: end;
  padding: 0;
  display: block;
  min-width: auto;
  :hover {
    background: transparent;
  }
`;
export const StyledActionButtonsBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const StyledErrorText = styled(Typography)`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.palette.error.main};
`;

export const StyledTitleText = styled(Typography)`
  text-align: center;
  margin: 1.5rem 0;
  margin-top: 0.1875rem;
`;
