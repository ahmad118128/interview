'use client';
import { styled } from '@mui/system';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import theme from '@/theme';

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .${tooltipClasses.tooltip} {
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    font-size: ${theme.typography.body2.fontSize};
    font-weight: ${theme.typography.body2.fontWeight};
    line-height: ${theme.typography.body2.lineHeight};
    padding: 0.375rem 0.5rem;
  }
  & .${tooltipClasses.arrow} {
    color: ${theme.palette.primary.main};
  }
`;
