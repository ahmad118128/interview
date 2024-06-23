import { Box, Grid, Typography } from '@mui/material';
import { StyledImage, StyledWrapperModal } from './styled';
import { reportPicModalProps } from './type';
import { ReportModal } from '@/strings';

export default function ReportPictureBox({ personInfo }: reportPicModalProps) {
  const { src, name, sex, age, date, arrow, birthCity, agreementPercent } =
    personInfo;
  return (
    <StyledWrapperModal>
      <StyledImage alt={src} src={src} width={180} height={180} />
      <Grid container rowSpacing={2} columnSpacing={4}>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>{ReportModal.name}</Typography>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>{ReportModal.arow}</Typography>
          <Typography>{arrow}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>{ReportModal.sex}</Typography>
          <Typography>{sex}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>{ReportModal.bithCity}</Typography>
          <Typography>{birthCity}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>{ReportModal.age}</Typography>
          <Typography>{age}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>{ReportModal.agreementPercent}</Typography>
          <Typography>{agreementPercent}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>{ReportModal.date}</Typography>
          <Typography>{date}</Typography>
        </Grid>
      </Grid>
    </StyledWrapperModal>
  );
}
