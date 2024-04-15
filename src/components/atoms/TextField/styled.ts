import { Box, styled, TextField, Typography } from '@mui/material';
import { StyledTextFieldRtlType } from './type';

export const StyledTextFieldRtl = styled(TextField)<StyledTextFieldRtlType>(
  ({ ltrLabel, typeInput, theme }) => ({
    ' & input': {
      direction: (typeInput === 'password' || typeInput === 'money') && 'rtl',
      fontSize: '14px !important',
      // marginRight: '8px',
      // marginLeft: '8px',
      color: theme.palette.grey[600],
    },

    '&:hover:not(.Mui-focused)>label': {
      color: '#7EBC59',
    },

    '& .MuiInputLabel-filled': {
      direction: ltrLabel ? 'ltr' : 'rtl',
      right: ltrLabel ? 'inherit' : '1rem',
      left: ltrLabel ? '0.5rem' : 'inherit',
      fontFamily: !ltrLabel && 'iran-sans',
      fontWeight: '400 !important',
      fontSize: '0.875rem !important',
      transformOrigin: ltrLabel ? 'top left' : 'top right',
      color: 'black',
      '&.Mui-focused': {
        color: '#7EBC59',
      },
    },

    '& .MuiFilledInput-root': {
      color: '#000',
      fontFamily: 'Iran-yekan',
      fontSize: '14px',
      fontWeight: 'regular',
      backgroundColor: '#f4f4f4',
      borderTopLeftRadius: '7px',
      borderTopRightRadius: '7px',
      '&:after': {
        borderColor: '#7EBC59',
      },
      ':hover:not(.Mui-focused):not(.Mui-disabled)': {
        '&:before': {
          borderColor: '#7EBC59',
        },

        '& .iconWrapper > svg': {
          fill: '#7EBC59',
        },
      },
      ':disable &:after': {
        border: 'none',
      },

      '.MuiInputBase-root': {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '0.875rem !important',
        lineHeight: ' 1.313rem !important',
        gap: '0.5rem !important',
      },
    },
  })
);
export const StyledToman = styled(Box)`
  font-size: 14px !important;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.grey[500]};
`;
export const StyledErrorMessage = styled(Typography)`
  min-height: 20px; // prevent reformatting when get error
  color: ${({ theme }) => theme.palette.error.main};
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  text-align: right;
`;
