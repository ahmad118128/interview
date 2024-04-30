'use client';
import { Box, styled, TextField, Typography } from '@mui/material';
import {
  BaseInput,
  StyledTextFieldRtlType,
} from '@/components/baseComponents/baseInput';

export const StyledTextField = styled(BaseInput)<StyledTextFieldRtlType>(({
  ltrLabel,
  typeInput,
  theme,
  value,
}) => {
  return {
    ' & input': {
      direction: (typeInput === 'password' || typeInput === 'file') && 'rtl',
      fontSize: theme.typography.body1.fontSize,
      fontFamily: theme.typography.fontFamily,
      fontStyle: 'normal',
    },

    '&:hover>label': {
      color: theme.palette.primary.light,
    },

    '& .MuiInputLabel-filled': {
      direction: ltrLabel ? 'ltr' : 'rtl',
      right: ltrLabel ? 'inherit' : '1rem',
      left: ltrLabel ? '0.5rem' : 'inherit',
      fontFamily: theme.typography.fontFamily,
      fontWeight: '400 !important',
      fontSize: '0.875rem !important',
      transformOrigin: ltrLabel ? 'top left' : 'top right',
      color: theme.palette.primary.main,
      '&.Mui-focused': {
        color: theme.palette.primary.light,
      },
      '&.Mui-disabled': {
        color: theme.palette.grey[300],
      },
    },

    '& .MuiInputBase-root': {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: 'normal',
      width: '8.75rem',
      height: '3rem',
      backgroundColor: theme.palette.grey[100],
      borderTopLeftRadius: '0.438rem',
      borderTopRightRadius: '0.438rem',
      '&:after': {
        borderColor: theme.palette.primary.light,
      },

      ':hover:not(.Mui-disabled)': {
        backgroundColor: theme.palette.grey[100],
        '&:before': {
          borderColor: theme.palette.primary.light,
        },
        '& .iconWrapperVisibility > svg': {
          fill: theme.palette.primary.light,
        },
        '& .iconUpload > svg': {
          fill: theme.palette.primary.light,
        },
      },
      ':disable &:after': {
        border: 'none',
      },
      '& ::-webkit-file-upload-button': {
        display: 'none',
      },
      '& ::file-selector-button': {
        display: 'none',
      },
      '& input[type=file]': {
        fontSize: value ? '14px !important' : '0px !important',
      },
    },
  };
});

export const StyledErrorMessage = styled(Typography)`
  min-height: 20px; // prevent reformatting when get error
  color: ${({ theme }) => theme.palette.error.main};
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  text-align: right;
  font-size: 0.5rem;
  font-family: 'iranYekan';
`;
