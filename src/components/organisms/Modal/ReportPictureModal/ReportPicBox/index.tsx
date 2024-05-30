import { Box, Grid, Typography } from '@mui/material';
import { StyledImage, StyledWrapperModal } from './styled';
import { reportPicModalProps } from './type';

export default function ReportPictureBox({
  src,
  name,
  sex,
  age,
  date,
  arrow,
  birthCity,
  agreementPercent,
}: reportPicModalProps) {
  return (
    <StyledWrapperModal>
      <StyledImage alt={src} src={src} width={180} height={180} />
      <Grid container rowSpacing={2} columnSpacing={4}>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>نام گیت</Typography>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography> جهت گیت</Typography>
          <Typography>{arrow}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>جنسیت</Typography>
          <Typography>{sex}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>محل تولد</Typography>
          <Typography>{birthCity}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>سن</Typography>
          <Typography>{age}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>درصد تطابق</Typography>
          <Typography>{agreementPercent}</Typography>
        </Grid>
        <Grid item gap={4} xs={6} display="flex" width="100%">
          <Typography>زمان ثبت</Typography>
          <Typography>{date}</Typography>
        </Grid>
      </Grid>
    </StyledWrapperModal>
  );
}
