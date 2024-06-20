import { Box, Typography } from '@mui/material';
import { ReportModal } from '@/strings';

import {
  StyledImage,
  StyledInfoData,
  StyledInfoTitles,
  StyledInfoWrapper,
  StyledWrapperImage,
  StyledWrapperModal,
} from './styled';
import { reportPicModalProps } from './type';

export default function ReportPictureBox({ personInfo }: reportPicModalProps) {
  const { src, name, sex, age, date, arrow, birthCity, agreementPercent } =
    personInfo;
  return (
    <StyledWrapperModal>
      <StyledWrapperImage>
        <StyledImage alt={src} src={src} objectFit="cover" fill />
      </StyledWrapperImage>

      <StyledInfoWrapper>
        <StyledInfoTitles>
          <Typography variant="h4">{ReportModal.arow}</Typography>
          <Typography variant="h4">{ReportModal.name}</Typography>
          <Typography variant="h4">{ReportModal.bithCity}</Typography>
          <Typography variant="h4">{ReportModal.sex}</Typography>
          <Typography variant="h4">{ReportModal.agreementPercent}</Typography>
          <Typography variant="h4">{ReportModal.age}</Typography>
          <Typography variant="h4">{ReportModal.date}</Typography>
        </StyledInfoTitles>

        <StyledInfoData>
          <Typography variant="body1" sx={{ with: '100%' }}>
            {arrow}
          </Typography>
          <Typography variant="body1" sx={{ with: '100%' }}>
            {name}
          </Typography>
          <Typography variant="body1" sx={{ with: '100%' }}>
            {birthCity}
          </Typography>
          <Typography variant="body1" sx={{ with: '100%' }}>
            {sex}
          </Typography>
          <Typography variant="body1" sx={{ with: '100%' }}>
            {agreementPercent}
          </Typography>
          <Typography variant="body1" sx={{ with: '100%' }}>
            {age}
          </Typography>
          <Typography variant="body1" sx={{ with: '100%' }}>
            {date}
          </Typography>
        </StyledInfoData>
      </StyledInfoWrapper>
    </StyledWrapperModal>
  );
}
