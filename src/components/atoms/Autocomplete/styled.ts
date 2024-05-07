import { Chip, Paper, Autocomplete, TextField, styled } from '@mui/material';
import { SecondaryCustomInputTypes } from './type';
import theme from '@/theme';
import { CustomChip } from '../CustomChip';

// import { SecondaryCustomInput } from "styled";

// export const Listbox = styled("li")(({ theme }) => ({
//   display: "flex !important",
//   justifyContent: "space-between !important",
//   alignItems: "center !important",
//   padding: "6px !important",
//   marginBlock: "4px !important",
//   backgroundColor: "transparent !important",
//   borderRadius: "8px",
//   fontWeight: "400",

//   "&:hover span": {
//     color: theme.palette.secondary.main,
//   },

//   '&[aria-selected="true"]': {
//     backgroundColor: `${theme.palette.primary.dark} !important`,
//     "& svg": {
//       color: theme.palette.secondary.main,
//     },
//   },

//   "& svg": {
//     color: "transparent", // Transparent by default
//   },
//   [`&.${autocompleteClasses.focused}`]: {
//     "& svg": {
//       color: "transparent",
//     },
//   },
//   "& span": {
//     color: theme.palette.common.white,
//     fontSize: theme.typography.fontSize,
//   },

//   "&:hover": {
//     backgroundColor: `${theme.palette.primary.dark} !important`,
//   },
// }));

export const Listbox = styled('li')`
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: 6px !important;
  margin-block: 4px !important;
  background-color: transparent !important;
  border-radius: 8px !important;
  font-size: 14px;
  font-weight: 400 !important;
  color: #383838;
  svg {
    display: none;
  }
  &[aria-selected='true'] {
    svg {
      display: block;
    }
  }
`;

export const AutocompleteTextField = styled(
  TextField
)<SecondaryCustomInputTypes>`
  & > div {
    padding: 0 !important;
  }

  & .MuiChip-root {
    margin-top: 10px;
    margin-right: 4px;
  }

  & .MuiFilledInput-root {
    color: #000;
    border-radius: 6px 6px 0px 0px;
    background-color: #f5f5f5;
    min-height: 48px;
    padding-block: 8px !important;
    align-items: flex-end;
    ::before {
      border-color: #383838;
    }
    .MuiInputBase-input {
      padding-inline: 0.5rem;
      box-sizing: border-box;
    }
    & .MuiAutocomplete-endAdornment {
      left: ${({ dir }) => (dir == 'rtl' ? '0' : 'auto')};
      right: ${({ dir }) => (dir == 'ltr' ? '0' : 'auto')};
    }

    & .MuiSvgIcon-root {
      color: ${({ theme }) => theme.palette.grey[300]};
    }
  }

  & .MuiFormHelperText-root {
    text-align: ${({ dir }) => (dir == 'rtl' ? 'right' : 'left')};
    margin-inline: 4px;
  }

  &:hover {
    color: #7ebc59;
    background-color: transparent !important;
    & .MuiAutocomplete-endAdornment svg {
      color: #7ebc59;
    }
    .MuiFilledInput-root {
      ::before {
        border-color: #7ebc59 !important;
      }
    }
    label {
      color: #7ebc59;
    }
  }

  & .Mui-focused {
    ::after {
      border-color: #7ebc59 !important;
    }
    svg {
      color: #7ebc59 !important;
    }
  }

  & label {
    color: #383838;
    transform: translate(
        ${({ labelDirection }) => (labelDirection === 'ltr' ? '8px' : '-8px')},
        14px
      )
      scale(1);
    right: ${({ labelDirection }) => (labelDirection === 'ltr' ? 'auto' : '0')};
    left: ${({ labelDirection }) => (labelDirection === 'ltr' ? '0' : 'auto')};
    font-size: ${theme.typography.body1.fontSize}px !important;
    font-weight: 400 !important;
  }

  & label.MuiInputLabel-shrink {
    transform: translate(
        ${({ direction }) => (direction === 'ltr' ? '8px' : '-8px')},
        2px
      )
      scale(1);
    font-size: 12px !important;
  }

  & label.Mui-focused {
    transform: translate(
        ${({ direction }) => (direction === 'ltr' ? '8px' : '-8px')},
        2px
      )
      scale(1);
    font-size: 12px !important;
    color: #7ebc59 !important;
  }
`;

export const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: `#fff !important`,
  border: '1px solid #EDEDEF',
  padding: '4px',
  borderRadius: '0px 0px 6px 6px',

  '& .MuiAutocomplete-noOptions': {
    color: theme.palette.common.white,
    fontSize: '0.875rem',
    fontWeight: '400',
  },
}));
