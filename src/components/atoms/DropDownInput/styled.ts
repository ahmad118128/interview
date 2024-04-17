// import {
//     Box,
//     FormControlLabel,
//     MenuItem,
//     styled,
//     TextField,
//     InputLabel,
//   } from '@mui/material';
//   import { styled as styledSystem } from '@mui/system';
//   import FormControl from '@mui/material/FormControl';
//   import {
//     StyledFormControlType,
//     StyledTextFieldRtlType,
//     StyledSearchBoxType,
//     TextareaFormControlProps,
//     StyledAutoCompleteType,
//   } from './type';

//   export const StyledTextFieldRtl = styled(TextField)<StyledTextFieldRtlType>(
//     ({ ltrLable, typeInput }) => ({
//       ' & input': {
//         direction: (typeInput === 'password' || typeInput === 'money') && 'ltr',
//         fontSize: '14px !important',
//         marginRight: '8px',
//         marginLeft: '8px',
//       },
//       '& .css-10t8ezv-MuiFormLabel-root-MuiInputLabel-root': {
//         fontSize: '16px !important',
//         transformOrigin: 'top right',
//         left: ltrLable ? '0 !important' : 'initial !important',
//       },
//       '& .css-8lib96-MuiFormLabel-root-MuiInputLabel-root': {
//         transformOrigin: 'top right',
//         left: ltrLable ? '0 !important' : 'initial !important',
//       },
//       '& .MuiInputLabel-root': {
//         fontSize: '14px !important',
//         marginRight: '8px',
//       },
//     })
//   );

//   export const StyledTextFieldLtr = styled(TextField)({
//     ' & input': {
//       direction: 'ltr',
//     },
//     '& .css-10t8ezv-MuiFormLabel-root-MuiInputLabel-root': {
//       fontSize: '16px !important',
//       direction: 'rtl',
//       transformOrigin: 'top right',
//       left: 'initial !important',
//     },
//     '& .css-8lib96-MuiFormLabel-root-MuiInputLabel-root': {
//       transformOrigin: 'top right',
//       left: 'initial !important',
//     },
//     '& .MuiInputAdornment-positionEnd': {},
//   });

//   export const StyledErrorMessage = styled('p')`
//     min-height: 20px; // prevent reformatting when get error
//     font-size: 14px;
//     color: ${({ theme }) => theme.palette.error.main};
//     margin-top: 8px;
//     font-weight: 300;
//   `;

//   export const StyledFormControlLabel = styled(FormControlLabel)`
//     flex-direction: row-reverse !important;
//   `;
//   export const StyledToman = styled(Box)`
//     font-size: 14px !important;
//     font-weight: 400;
//     color: ${({ theme }) => theme.palette.grey[500]};
//   `;
//   export const StyledTextArea = styledSystem('div')<TextareaFormControlProps>(
//     ({ theme, ltr, error, disabled, readOnly }) => {
//       const errorColor = theme.palette.error.light;
//       const disableColor = theme.palette.grey[200];
//       const hoverColor = theme.palette.grey[600];
//       const mainColor = theme.palette.primary.main;
//       const activeColor = theme.palette.grey[300];

//       return {
//         '& textarea': {
//           borderRadius: '5px',
//           borderWidth: '1.5px',
//           pointerEvents: readOnly ? 'none' : 'auto',

//           border: error
//             ? `1.5px solid ${errorColor}`
//             : `1px ${!readOnly ? `solid` : `dashed`} ${activeColor}`,
//           color: `${activeColor} !important`,
//           direction: ltr ? `ltr` : `rtl`,
//           width: '100%',
//           padding: '10px',
//         },

//         '& textarea:hover': {
//           border: !readOnly && `1px solid ${hoverColor} !important`,
//           color: !readOnly && `${hoverColor} !important`,
//         },

//         '& textarea:focus': {
//           border:
//             !readOnly &&
//             `1.5px solid ${error ? errorColor : mainColor} !important`,
//           color: !readOnly && `${mainColor} !important`,
//         },

//         '& :disabled,textarea:hover:disabled': {
//           border: `1px solid ${disableColor} !important`,
//           color: `${disableColor} !important`,
//         },

//         '& label': {
//           textAlign: ltr ? `left` : `right`,
//           color: !readOnly
//             ? disabled
//               ? disableColor
//               : error && errorColor
//             : activeColor,
//           fontSize: '0.875rem !important',
//           marginBottom: '0.5rem',
//         },
//         '& p': {
//           textAlign: ltr ? `left` : `right`,
//           color: error && errorColor,
//           marginTop: '0px',
//         },
//         '& :disabled::placeholder': {
//           color: disableColor,
//         },
//       };
//     }
//   );
//   export const StyledSearchBox = styled('div')<StyledSearchBoxType>`
//     width: 100%;
//     height: 40px;
//     position: relative;

//     input {
//       font-size: 14px;
//       font-weight: 300;
//       outline: none;
//       background-color: transparent;
//       width: 100%;
//       height: 100%;
//       padding: 10px;
//       border-radius: 10px;
//       transition: all 0.3s ease;
//       cursor: pointer;

//       color: ${({ theme, White }) =>
//         White ? theme.palette.text.dark1 : theme.palette.background.default};
//       background-color: ${({ theme, White }) =>
//         White ? theme.palette.background.default : 'transparent'};
//       border: solid 1px
//         ${({ theme, White }) =>
//           White
//             ? theme.palette.background.gray2
//             : theme.palette.background.light2};

//       &::placeholder {
//         color: ${({ theme, White }) =>
//           White ? theme.palette.text.gray1 : theme.palette.text.light2};
//         transition: all 0.3s ease;
//       }

//       &:hover {
//         border-color: ${({ theme, White }) =>
//           White ? theme.palette.text.dark1 : theme.palette.background.default};

//         &::placeholder,
//         & + .search-icon {
//           color: ${({ theme, White }) =>
//             White ? theme.palette.text.dark1 : theme.palette.background.default};
//           transition: all 0.3s ease;
//           position: absolute;
//           left: 15px;
//           top: 50%;
//           transform: translateY(-50%);
//         }
//       }

//       &:focus {
//         border-color: ${({ theme, White }) =>
//           White ? theme.palette.text.dark1 : theme.palette.background.default};
//         border: solid 2px;
//       }
//       &:focus + .search-icon {
//         color: ${({ theme, White }) =>
//           White ? theme.palette.text.dark1 : theme.palette.background.default};
//       }
//       &:focus + .search-icon line {
//         stroke: ${({ theme, White }) =>
//           White ? theme.palette.text.dark1 : theme.palette.background.default};
//       }
//     }

//     .search-icon {
//       color: ${({ theme, White }) =>
//         White ? theme.palette.text.gray1 : theme.palette.text.light2};
//       transition: all 0.3s ease;
//       position: absolute;
//       left: 15px;
//       top: 50%;
//       transform: translateY(-50%);
//     }
//   `;
//   export const StyledCancelSearch = styled('div')`
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   `;
//   export const StyledFormControl = styled(FormControl)<StyledFormControlType>`
//     svg {
//       left: 0.5rem;
//       right: auto;
//       * {
//         fill: ${({ theme, error }) => (error ? theme.palette.error.main : '')};
//       }
//     }

//     .MuiInputBase-root::before {
//       border-bottom: 1px dotted;
//       border-bottom: ${({ disabled, readOnly }) =>
//         disabled ? '1px solid' : readOnly ? '1px dotted' : '1px solid #919899'};
//     }

//     .MuiSelect-icon {
//       top: auto !important;
//       bottom: 0.625rem;
//     }
//     .MuiSelect-standard {
//       img {
//         display: none;
//       }
//     }
//     .MuiInput-input {
//       padding-right: 0.5rem !important;
//       p {
//         margin-bottom: 5px;
//       }
//     }
//     .Mui-disabled {
//       svg {
//         left: 0.5rem;
//         right: auto;
//         * {
//           fill: ${({ theme }) => theme.palette.grey[200]};
//         }
//       }
//     }
//     &.Mui-selected {
//       background-color: white !important;
//       color: ${({ theme }) => theme.palette.primary.main};
//       font-weight: 40;
//       font-size: 0.75rem;
//       &:hover {
//         background: ${({ theme }) => theme.palette.primary[50]} !important;
//       }
//     }
//     * {
//       font-size: 0.875rem !important;
//       font-weight: 400;
//     }
//     .MuiSelect-select:focus {
//       background-color: transparent !important;
//     }

//     .MuiInputLabel-shrink {
//       top: 8px !important;
//     }
//     .MuiInputBase-root:hover {
//       ::before {
//         border-width: 1px !important;
//       }
//     }
//     .MuiInputLabel-root {
//       right: 1.5rem;
//       top: -0.1rem;
//       left: inherit;
//       transform-origin: top right;
//     }
//   `;
//   export const StyledInputLabel = styled('span')`
//     font-size: 0.875rem !important;
//     font-weight: 400;
//   `;

//   export const StyledMenuItem = styled(MenuItem)`
//     display: flex;
//     justify-content: space-between;
//     height: 40px;
//     &:hover {
//       background-color: ${({ theme }) => theme.palette.grey[50]};
//     }
//   `;
//   export const StyledItemMenuItem = styled('p')`
//     font-size: 0.75rem;
//     font-weight: 400;
//   `;

//   export const StyledTextFieldAutoComplete = styled(
//     TextField
//   )<StyledAutoCompleteType>`
//     direction: ${({ ltr }) => (ltr ? 'ltr' : 'rtl')} !important;
//     .MuiInputBase-root::before {
//       border-bottom: ${({ readOnly, theme }) =>
//         readOnly && `0.063rem dashed ${theme.palette.grey[400]}`};
//       border-bottom: ${({ disabled, theme }) =>
//         disabled && `0.063rem solid ${theme.palette.grey[200]}`};
//     }
//     .MuiInputBase-root:hover {
//       ::before {
//         border-bottom: ${({ disabled, theme, error }) =>
//           !disabled &&
//           !error &&
//           ` 0.094rem solid ${theme.palette.grey[600]} !important`};
//       }
//     }
//     .MuiInputBase-root::after {
//       border-bottom: ${({ theme, error }) =>
//         !error && ` 0.094rem solid ${theme.palette.primary.main} !important`};
//     }
//     input {
//       /* Firefox 4-18 */
//       &:-moz-placeholder {
//         color: ${({ theme, error }) => error && theme.palette.error[200]};
//       }

//       /* Firefox 19+ */
//       &::-moz-placeholder {
//         color: ${({ theme, error }) => error && theme.palette.error[200]};
//       }

//       &::-webkit-input-placeholder {
//         /* Edge */
//         color: ${({ theme, error }) => error && theme.palette.error[200]};
//       }

//       &:-ms-input-placeholder {
//         /* Internet Explorer 10-11 */
//         color: ${({ theme, error }) => error && theme.palette.error[200]};
//       }

//       &::placeholder {
//         color: ${({ theme, error }) => error && theme.palette.error[200]};
//       }
//     }
//     .MuiInputLabel-shrink {
//       padding: none !important;
//     }
//     .MuiInputBase-input {
//       padding-bottom: 0.25rem !important;
//       padding-top: 0.5rem !important;
//     }
//     .MuiInputBase-root {
//       direction: ${({ ltr }) => (ltr ? 'ltr' : 'rtl')} !important;
//       padding-right: ${({ ltr }) => (ltr ? '3.25rem' : '0.313rem')} !important;
//       padding-left: ${({ ltr }) => (ltr ? '0.313rem' : '3.25rem')} !important;
//       font-family: 'IRANSansX' !important;
//       font-style: normal;
//       font-weight: 400 !important;
//       font-size: 0.875rem !important;
//       line-height: 1.313rem !important;
//       gap: 0.5rem;
//     }
//     .MuiInputLabel-root {
//       direction: ${({ ltr }) => (ltr ? 'ltr' : 'rtl')} !important;
//       right: ${({ ltr }) => (ltr ? 'inherit' : '0.5rem')} !important;
//       left: ${({ ltr }) => (ltr ? '0.5rem' : 'inherit')} !important;
//       font-weight: 400 !important;
//       font-size: 0.875rem !important;
//       &[data-shrink='false'] {
//         color: ${({ theme }) => theme.palette.text.secondary} !important;
//       }
//     }
//     .MuiAutocomplete-endAdornment {
//       left: ${({ ltr }) => (ltr ? 'inherit' : '0')} !important;
//       top: calc(50% - 1.375rem) !important;
//       right: ${({ ltr }) => (ltr ? '0' : 'inherit')} !important;
//       * {
//         fill: ${({ theme, error }) => error && theme.palette.error.main};
//       }
//     }
//   `;

//   export const StyledList = styled('li')<StyledAutoCompleteType>`
//     direction: ${({ ltr }) => (ltr ? 'ltr' : 'rtl')} !important;
//     padding: 0 0.5rem !important;
//     height: 2.5rem !important;
//     font-family: 'IRANSansX' !important;
//     font-style: normal;
//     font-weight: 400 !important;
//     font-size: 0.75rem !important;
//     line-height: 1.125rem !important;
//     color: ${({ theme }) => theme.palette.grey[500]} !important;

//     &[aria-selected='true'] {
//       background: white !important;
//       color: ${({ theme }) => theme.palette.text.dark5} !important;
//       img {
//         display: block !important;
//       }
//       &:hover {
//         background-color: ${({ theme }) => theme.palette.custom[500]} !important;
//       }
//     }

//     &:hover,
//     .Mui-focused {
//       background-color: ${({ theme }) => theme.palette.grey[50]} !important;
//     }
//   `;

//   export const StyledOptionImageWrapper = styled(Box)`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//   `;

//   export const ControlLabel = styled(FormControlLabel)`
//     margin: 0;
//   `;
