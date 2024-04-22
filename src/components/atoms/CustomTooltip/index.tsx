'use client';
import { styled } from '@mui/system';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .${tooltipClasses.tooltip} {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: '#fff';
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    padding: 0.375rem 0.5rem;
  }
  & .${tooltipClasses.arrow} {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
