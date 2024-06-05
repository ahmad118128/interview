'use client';
import { Box, MenuItem, styled, TextField, Typography } from '@mui/material';

import theme from '@/theme';
import { SecondaryCustomInputTypes } from './type';
import { StyledTextFieldRtlType } from '@/components/BaseComponents/BaseInput/type';
import { BaseInput } from '@/components/BaseComponents/BaseInput';

export const StyledTextField = styled(BaseInput)<StyledTextFieldRtlType>(({
  ltrLabel,
  typeInput,
  theme,
  value,
  InputProps,
  placeholder,
  label,
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
      right: InputProps ? '2rem' : '1rem',
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
      fontSize: value || !label ? '14px !important' : '0px !important',
      color: value && theme.palette.grey[300],
    },
    '.MuiFormHelperText-root': {
      color: theme.palette.error.light,
    },

    '& .MuiInputBase-root': {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: 'normal',
      minHeight: '3rem',
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
        '& .uploadIcon': {
          color: theme.palette.primary.light,
        },
      },

      '& .uploadIcon': {
        marginLeft: '0.5rem',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.grey[300],
        borderWidth: '1px',
      },
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.light,
          borderWidth: '1px',
        },
        '& .uploadIcon': {
          color: theme.palette.primary.light,
        },
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

export const StyledItem = styled(MenuItem)<any>`
  font-size: ${theme.typography.body2.fontSize}px;
  font-family: inherit;
  & hover {
    background: red;
  }
`;

export const SecondaryCustomInput = styled(
  TextField
)<SecondaryCustomInputTypes>`
  width: ${({ width }) => (width ? width : '100%')};
  margin: ${({ margin }) => margin && margin};
  margin-top: ${({ marginTop }) => marginTop && marginTop};
  direction: ${({ direction }) => direction && direction};
  & fieldset {
    border: none !important;
    border-bottom: ${({ borderBottom }) =>
      borderBottom
        ? borderBottom
        : `1px solid ${theme.palette.grey['300']}`} !important;
    border-radius: 0;
  }

  & .MuiButtonBase-root {
    right: ${({ direction }) => (direction === 'ltr' ? '3px' : 'auto')};
    left: ${({ direction }) => (direction === 'ltr' ? 'auto' : '0')};
  }

  & input {
    line-height: 1.6rem;
    padding: ${({ padding }) => (padding ? padding : '10px 5px')} !important;
    font-size: ${theme.typography.body1.fontSize}px;
    color: ${({ inputColor }) => inputColor ?? theme.palette.common.white};
    height: auto;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 1000px
        ${({ autofillBackgroundColor }) =>
          autofillBackgroundColor
            ? autofillBackgroundColor
            : theme.palette.primary.dark}
        inset !important;
      -webkit-text-fill-color: ${theme.palette.common.white};
      border-radius: 0;
    }
    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }
    &[type='search']::-webkit-search-decoration,
    &[type='search']::-webkit-search-cancel-button,
    &[type='search']::-webkit-search-results-button,
    &[type='search']::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    & ::placeholder {
      font-size: ${({ placeholderFontSize }) =>
        placeholderFontSize || 'inherit'};
      font-weight: ${({ placeholderFontWeight }) =>
        placeholderFontWeight || 'inherit'};
    }
  }

  & label {
    color: ${({ labelColor }) =>
      labelColor ? labelColor : theme.palette.grey['300']};
    transform: translate(
        ${({ labelDirection }) => (labelDirection === 'ltr' ? '5px' : '-5px')},
        15px
      )
      scale(1);
    right: ${({ labelDirection }) => (labelDirection === 'ltr' ? 'auto' : '0')};
    left: ${({ labelDirection }) => (labelDirection === 'ltr' ? '0' : 'auto')};
    font-size: ${theme.typography.body1.fontSize}px !important;
    font-weight: 400 !important;
  }

  & label.MuiInputLabel-shrink {
    transform: translate(
        ${({ direction }) => (direction === 'ltr' ? '5px' : '-5px')},
        -10px
      )
      scale(1);
    font-size: 12px !important;
  }

  & label.Mui-focused {
    transform: translate(
        ${({ direction }) => (direction === 'ltr' ? '5px' : '-5px')},
        -10px
      )
      scale(1);
    font-size: 12px !important;
    color: ${({ focusedLabelColor }) =>
      focusedLabelColor ?? theme.palette.secondary.main};
  }

  & .Mui-focused {
    & fieldset {
      border-bottom: ${({ focusedBorderBottom }) =>
        focusedBorderBottom
          ? focusedBorderBottom
          : `1px solid ${theme.palette.secondary.main}`} !important;
    }
  }
  & .Mui-disabled {
    color: ${theme.palette.grey['300']} !important;
    & label {
      color: ${theme.palette.grey['300']} !important;
    }
    & input {
      -webkit-text-fill-color: ${theme.palette.grey['300']} !important;
    }
    & fieldset {
      border-bottom: 1px solid ${theme.palette.grey['300']} !important;
    }
  }

  &.custom-select {
    & .MuiSelect-select {
      line-height: 1.6rem;
      padding: ${({ padding }) => (padding ? padding : '10px 5px')} !important;
      font-size: ${theme.typography.body1.fontSize}px;
      color: ${({ inputColor }) => inputColor ?? theme.palette.common.white};
    }

    & svg {
      top: calc(50% - 0.25em);
      right: ${({ direction }) => (direction === 'ltr' ? '7px' : 'auto')};
      left: ${({ direction }) => (direction === 'ltr' ? 'auto' : '7px')};
    }
  }
`;
