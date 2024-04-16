import { Box, styled, TextField, Typography } from '@mui/material';
import { StyledTextFieldRtlType } from './type';

export const StyledTextFieldRtl = styled(TextField)<StyledTextFieldRtlType>(({
  ltrLabel,
  typeInput,
  theme,
}) => {
  console.log({ theme });

  return {
    ' & input': {
      direction: (typeInput === 'password' || typeInput === 'money') && 'rtl',
      fontSize: '14px !important',
      // marginRight: '8px',
      // marginLeft: '8px',
      // color: theme.palette.grey[600],
    },

    '&:hover>label': {
      color: theme.palette.primary.light,
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
        color: theme.palette.primary.light,
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
        borderColor: theme.palette.primary.light,
      },

      ':hover:not(.Mui-disabled)': {
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

      '.MuiInputBase-root': {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '0.875rem !important',
        lineHeight: ' 1.313rem !important',
        gap: '0.5rem !important',
      },
      '& ::-webkit-file-upload-button': {
        display: 'none',
      },
      '& ::file-selector-button': {
        display: 'none',
      },
      '& input[type=file]': {
        color: 'rgba(0, 0, 0, 0)',
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
`;
