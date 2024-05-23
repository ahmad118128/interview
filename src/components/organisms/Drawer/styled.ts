import { Drawer, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: 300px;
    background: ${({ theme }) => theme.palette.primary.dark};
    border-radius: 2rem 0 0 2rem;
    height: '100%';
  }
  .MuiBackdrop-root {
    backdrop-filter: blur(5px);
    background: rgba(64, 54, 54, 0.4);
  }

  .ref {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.palette.primary.dark};
    border-radius: 2rem 0;
    padding: 1.5rem 0.75rem;
    color: ${({ theme }) => theme.palette.common.white};
    height: 100%;
  }
`;
