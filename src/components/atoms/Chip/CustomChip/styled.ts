import { styled } from '@mui/material/styles';
import { StyledChipType } from './type';
import { BasedChip } from '../BasedChip';

export const StyledChip = styled(BasedChip)<StyledChipType>`
  &.baseChip {
    display: flex;
    gap: 0.5rem;
    font-family: 'IRANYekan';
    font-style: normal;
    font-weight: 400 !important;
    border: 0.0625rem solid ${({ theme }) => theme.palette.grey[300]};
    border-radius: 0.375rem;
    background: ${({ theme }) => theme.palette.grey[100]};
    &:hover {
      border: 0.0625rem solid ${({ theme }) => theme.palette.primary.light};
      .MuiChip-label,
      .MuiChip-deleteIcon {
        color: ${({ theme }) => theme.palette.primary.light};
      }
    }

    direction: ${({ ltr }) => (ltr ? 'ltr' : 'rtl')} !important;

    opacity: 1;
    color: ${({ theme, disabled }) =>
      disabled ? theme.palette.grey[300] : theme.palette.grey[900]};
    cursor: pointer;

    .MuiChip-deleteIcon {
      margin: 0 !important;
      color: ${({ theme, disabled }) =>
        disabled ? theme.palette.grey[300] : theme.palette.grey[900]};
    }

    .MuiChip-label {
      padding-right: ${({ ltr }) => (ltr ? '0.125rem' : '0')} !important;
      padding-left: ${({ ltr }) => (ltr ? '0' : '0')} !important;
      padding-top: 0.188rem;
    }
  }
  &.normal {
    height: 1.6rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem !important;
    font-weight: 400 !important;
  }
  &.medium {
    height: 1.75rem;
    padding: 0.25rem 0.5rem;
  }
  &.small {
    height: 1.25rem;
    padding: 0.125rem 0.25rem;
    font-size: 0.75rem !important;
    font-weight: 400 !important;
  }
`;
