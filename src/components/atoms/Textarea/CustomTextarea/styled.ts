import { styled } from '@mui/material';
import { TextareaFormControlProps } from './type';
import { BasedTextarea } from '@/components/BasedComponents/atom/BasedTextarea';

export const StyledTextArea = styled(BasedTextarea)<TextareaFormControlProps>`
  ${({ theme, ltr, disabled, readOnly }) => {
    const errorColor = theme.palette.error.main;
    const disableColor = theme.palette.grey[300];
    const hoverColor = theme.palette.primary.light;
    const activeColor = theme.palette.grey[100];
    const placeholderColor = theme.palette.grey[300];

    return `
      & textarea {
        width: 41.125rem;
        height: 2.8125rem;
        border-radius: 0.375rem;
        background: ${activeColor};
        pointer-events: ${readOnly ? 'none' : 'auto'};
        border: ${`0.0625rem ${!readOnly ? 'solid' : 'dashed'} ${disabled ? disableColor : '#000'}`};
        color: #000 !important;
        direction: ${ltr ? 'ltr' : 'rtl'};
        padding: 0.625rem;

        &::-webkit-scrollbar {
          width: 0.25rem !important;
        }

        &::-webkit-input-placeholder {
          font-family: IRANYekan;
          font-size: 0.875rem;
          font-weight: 400;
          color: ${placeholderColor};
        }

        &:focus::-webkit-input-placeholder {
          color: #000;
        }

        &::-webkit-scrollbar-thumb {
          background: ${theme.palette.grey[400]} !important;
          border-radius: 0.25rem !important;
        }
        
        &:focus {
          border: 0.0625rem solid ${hoverColor} ;
          color: ${!readOnly && '#000 !important'};
          outline-style: none;
        }
      }

      // & textarea:hover {
      //   border: ${!readOnly && `0.0625rem solid ${hoverColor}`} ;
      // }

      &:disabled,
      textarea:hover:disabled {
        border: 0.0625rem solid ${disableColor} !important;
        color: ${disableColor} !important;
      }

      & label {
        text-align: ${ltr ? 'left' : 'right'};
        color: ${!readOnly ? disabled && disableColor : activeColor};
        font-size: 0.875rem !important;
        margin-bottom: 0.5rem;
        font-weight: 400;
        line-height: 1.3125rem;
      }

      &:hover label {
        color: ${disabled ? disableColor : hoverColor};
      }

      & :disabled::placeholder {
        color: ${disableColor};
      }

      & .errorStyle {
        min-height: 1.25rem;
        font-size: 0.75rem !important;
        color: ${errorColor};
        font-weight: 300;
        margin-right: 0.5rem;
      }
    `;
  }}
`;
