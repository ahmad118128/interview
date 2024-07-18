import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { StyledHoverIconProps } from './type';
import theme from '@/theme';

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
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
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
  height: 1.75rem;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.common.white};
  .css-6od3lo-MuiChip-label {
    padding-right: 0 !important;
    padding-left: 0.375rem !important;
    margin-top: 0.063rem;
  }
`;

export const StyledAccardion = styled(Accordion)`
  box-shadow: none;
  padding: 0;
  border-radius: 10px;
  background: transparent;
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 0;
  min-height: 0;
  .MuiAccordionSummary-contentGutters {
    justify-content: flex-end !important;
    margin: 0;
  }
  &[aria-expanded='true'] {
    margin: 0 !important;
    min-height: 0;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  margin-top: 1.25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: base-line;
  align-items: baseline;
  gap: 2rem;
  background: ${theme.palette.grey[50]};
  border: 1px solid ${theme.palette.grey[200]};
  border-radius: 0.625rem;
`;

export const StyledIconsContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledForm = styled('form')`
  width: 100%;
`;

export const StyledAddFormWrapper = styled(Box)`
  border-radius: 0.625rem;
  border: 1px solid ${theme.palette.grey[300]};
  background: ${theme.palette.grey[50]};
  padding: 0;
  min-height: 99.5%;
`;

export const StyledAddFormHeader = styled(Box)`
  border-bottom: 1px solid ${theme.palette.grey[300]};
  padding: 1.75rem 1rem;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 1.75rem 1rem;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 1.75rem 1.25rem;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding: 1.75rem 11.875rem;
  }

  border-radius: 0.625rem 0.625rem 0 0;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledAddFormMain = styled(Box)`
  padding: 1.75rem 1rem;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 1.75rem 1rem;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 1.75rem 1.25rem;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding: 1.75rem 11.875rem;
  }
`;

export const StyledGroupWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InnerAccardionSummary = styled(Box)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const IconsWrapper = styled(Box)`
  display: flex;
  gap: 1rem;
  align-items: baseline;
  justify-content: space-between;
`;

export const TableNameWrapper = styled(Box)`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
`;
