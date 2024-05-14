import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { StyledHoverIconProps } from './type';

export const StyledNumberOfTheTitle = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background: ${({ theme }) => theme.palette.primary.dark};
  color: white;
  border-radius: 0.75rem;
`;

export const StyledHoverIcon = styled(Box)<StyledHoverIconProps>`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: 0.875rem;
  cursor: pointer;
  * {
    color: ${({ theme, active }) =>
      active !== true ? theme.palette.info.main : 'white'};
  }
  background-color: ${({ theme, active }) =>
    active === true ? theme.palette.primary.dark : 'transparent'};
  &:hover {
    background-color: ${({ theme, active }) =>
      active !== true ? theme.palette.info.main : ''};
  }
  svg {
    color: ${({ theme, filters }) =>
      filters ? `${theme.palette.primary.dark} !important` : 'initial'};
  }
`;

export const StyledChip = styled(Chip)`
  padding: 0 0.625rem;
  height: 1.75rem;
  cursor: pointer;
  .css-6od3lo-MuiChip-label {
    padding-right: 0 !important;
    padding-left: 0.375rem !important;
    margin-top: 0.063rem;
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  background-color: ${({ theme }) => theme.palette.grey[100]} !important;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  .MuiAccordionSummary-contentGutters {
    justify-content: flex-end !important;
    margin: 0;
  }
  &[aria-expanded='true'] {
    // height: 3.75rem;
    padding: 0.5rem 1.5rem;
    margin-bottom: 0;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: transparent;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const StyledIconsContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
