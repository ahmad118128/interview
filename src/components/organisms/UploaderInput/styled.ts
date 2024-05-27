import { StyledTextFieldRtlType } from '@/components/baseComponents/baseInput';
import theme from '@/theme';
import { Box, TextField, styled } from '@mui/material';

export const StyleledUploaderWrapper = styled(Box)`
  width: 100%;
  min-height: 11.25rem;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  border: 1px dashed ${({ theme }) => theme.palette.primary.main};
  border-radius: 0.625rem;
  background-image: url('/assets/images/dashboard/upload.svg');
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 152px 100px;
  padding: 0.75rem 0;
  :hover {
    border: 1px dashed ${({ theme }) => theme.palette.primary.light};
  }
  & ::-webkit-file-upload-button {
    display: none;
  }
  & ::file-selector-button {
    display: none;
  }
`;

export const StyledUploaderInput = styled('input')`
  width: 100%;
  min-height: 11.25rem;
  font-size: 0px !important;
`;
