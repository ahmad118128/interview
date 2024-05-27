import { StyledTextFieldRtlType } from '@/components/baseComponents/baseInput';
import theme from '@/theme';
import { Box, TextField, styled, Typography } from '@mui/material';

export const StyleledUploaderWrapper = styled(Box)`
  position: relative;
  min-height: 11.25rem;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  border: 1px dashed ${({ theme }) => theme.palette.primary.main};
  border-radius: 0.625rem;
  background-image: url('/assets/images/dashboard/upload.svg');
  background-repeat: no-repeat;
  background-position: center top 0.75rem;
  background-size: 152px 100px;
  padding: 0.75rem 2.25rem;
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

export const StyledTypographyBody1 = styled(Typography)`
  position: absolute;
  top: 116px;
  left: 50%;
  transform: translateX(-50%);
`;
export const StyledCaption = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
`;
export const StyledUploadedImageBox = styled(Box)`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`;
export const StyledUploadedImageDescriptionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
export const StyledUploadedDescription = styled(Typography)`
fomt-size:${({ theme }) => theme.typography.caption.fontSize}
color:${({ theme }) => theme.palette.common.black}
`;
