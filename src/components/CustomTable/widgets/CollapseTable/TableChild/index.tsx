import { Box, Grid, Typography } from '@mui/material';
import { StyledContainer, StyledDetailsWrapper } from './styled';
import { DataBankRoute, SupervisitoryListRoute } from '@/strings';

export const Child = (props: any) => {
  const { row } = props;

  return (
    <Grid container spacing={8}>
      <Grid
        item
        xs={6}
        md={3}
        sx={{ display: 'flex', gap: '1.25rem', textAlign: 'start' }}
      >
        <Box sx={{ width: '6.25rem' }}>
          <Typography>{SupervisitoryListRoute.submitter}</Typography>
        </Box>
        <Box sx={{ width: '7.625rem' }}>
          <Typography>{row.submitter}</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        md={3}
        sx={{ display: 'flex', gap: '1.25rem', textAlign: 'start' }}
      >
        <Box sx={{ width: '6.25rem' }}>
          <Typography>{DataBankRoute.education}</Typography>
        </Box>
        <Box sx={{ width: '7.625rem' }}>
          <Typography>{row.education}</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        md={3}
        sx={{ display: 'flex', gap: '1.25rem', textAlign: 'start' }}
      >
        <Box sx={{ width: '6.25rem' }}>
          <Typography>{DataBankRoute.fatherName}</Typography>
        </Box>
        <Box sx={{ width: '7.625rem' }}>
          <Typography>{row.fatherName}</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        md={3}
        sx={{ display: 'flex', gap: '1.25rem', textAlign: 'start' }}
      >
        <Box sx={{ width: '6.25rem' }}>
          <Typography>{DataBankRoute.phone}</Typography>
        </Box>
        <Box sx={{ width: '7.625rem' }}>
          <Typography>{row.phone}</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        md={3}
        sx={{ display: 'flex', gap: '1.25rem', textAlign: 'start' }}
      >
        <Box sx={{ width: '6.25rem' }}>
          <Typography>{DataBankRoute.birthDate}</Typography>
        </Box>
        <Box sx={{ width: '7.625rem' }}>
          <Typography>{row.birthDate}</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        md={3}
        sx={{ display: 'flex', gap: '1.25rem', textAlign: 'start' }}
      >
        <Box sx={{ width: '6.25rem' }}>
          <Typography>{DataBankRoute.submitDate}</Typography>
        </Box>
        <Box sx={{ width: '7.625rem' }}>
          <Typography>{row.submitDate}</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        md={3}
        sx={{ display: 'flex', gap: '1.25rem', textAlign: 'start' }}
      >
        <Box sx={{ width: '6.25rem' }}>
          <Typography>{DataBankRoute.birthCertificateNumber}</Typography>
        </Box>
        <Box sx={{ width: '7.625rem' }}>
          <Typography>{row.birthCertificateNumber}</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        md={3}
        sx={{ display: 'flex', gap: '1.25rem', textAlign: 'start' }}
      >
        <Box sx={{ width: '6.25rem' }}>
          <Typography>{DataBankRoute.sex}</Typography>
        </Box>
        <Box sx={{ width: '7.625rem' }}>
          <Typography>{row.sex}</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ display: 'flex', gap: '1.25rem', textAlign: 'start' }}
      >
        <Box sx={{ width: '6.25rem' }}>
          <Typography>{DataBankRoute.birthCity}</Typography>
        </Box>
        <Box sx={{ width: '7.625rem' }}>
          <Typography>{row.birthCity}</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ display: 'flex', gap: '1.25rem', textAlign: 'start' }}
      >
        <Box sx={{ width: '6.25rem' }}>
          <Typography>{DataBankRoute.information}</Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography>{row.information}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
