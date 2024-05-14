import theme from '@/theme';
import { Grid, TextField, Typography, styled } from '@mui/material';

export const TimeDatePickerTimer = styled(TextField)`
  border: none;
  font-family: 'iran-sans';
  align-items: flex-start;
  input {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'iran-sans' !important;
    padding: 0;
    margin: 0;
    width: 18px !important;
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: ${theme.palette.common.white};
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      display: none;
    }
  }
  fieldset {
    display: none;
  }
`;

export const Meridiem = styled(Typography)`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  height: 28px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  width: 48px;
  justify-content: center;
  cursor: pointer;
`;

export const MeridiemContainer = styled(Grid)`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: center;
  padding: 0.125rem;
  flex-wrap: nowrap;
  background-color: ${theme.palette.primary.dark};
  border-radius: 0.5rem;
  width: 100px;
`;

export const TimeContainer = styled(Grid)`
  background-color: ${theme.palette.primary.dark};
  width: 64px;
  border-radius: 0.5rem;
  flex-wrap: nowrap;
  padding: 0.375rem 0.5rem;
  height: 32px;
  align-items: center;
  gap: 0.25rem;
  display: flex;
`;
