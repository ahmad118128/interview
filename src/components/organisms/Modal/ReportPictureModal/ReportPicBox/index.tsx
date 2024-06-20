import { Box, Grid, Typography } from '@mui/material';
import { StyledImage, StyledWrapperModal } from './styled';
import { reportPicModalProps } from './type';
import { ReportModal } from '@/strings';
import theme from '@/theme';

export default function ReportPictureBox({ personInfo }: reportPicModalProps) {
  const { src, name, sex, age, date, arrow, birthCity, agreementPercent } =
    personInfo;
  return (
    <StyledWrapperModal>
      <StyledImage
        alt={src}
        src={src}
        width={210}
        height={210}
        layout="responsive"
        // sizes="(max-width: 450px) 33vw, (max-width:768px) 50vw,(max-width:1200)70vw, 33vw"
      />
      <Box
        sx={{
          // width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: '1.5rem',
        }}
      >
        <Box
          sx={{
            width: '70px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
          }}
        >
          <Typography>{ReportModal.arow}</Typography>
          <Typography>{ReportModal.name}</Typography>
          <Typography>{ReportModal.bithCity}</Typography>
          <Typography>{ReportModal.sex}</Typography>
          <Typography>{ReportModal.agreementPercent}</Typography>
          <Typography>{ReportModal.age}</Typography>
          <Typography>{ReportModal.date}</Typography>
        </Box>
        <Box
          sx={{
            width: '120px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
          }}
        >
          <Typography sx={{ with: '100%' }}>{arrow}</Typography>
          <Typography sx={{ with: '100%' }}>{name}</Typography>
          <Typography sx={{ with: '100%' }}>{birthCity}</Typography>
          <Typography sx={{ with: '100%' }}>{sex}</Typography>
          <Typography sx={{ with: '100%' }}>{agreementPercent}</Typography>
          <Typography sx={{ with: '100%' }}>{age}</Typography>
          <Typography sx={{ with: '100%' }}>{date}</Typography>
        </Box>
      </Box>
      {/* <Grid container rowSpacing={2} columnSpacing={4}>
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
      </Grid> */}
    </StyledWrapperModal>
  );
}
