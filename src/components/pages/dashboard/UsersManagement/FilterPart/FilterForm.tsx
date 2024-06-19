import { Box, Grid } from '@mui/material';
import { StyledFilterChild } from '@/components/pages/dashboard/image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { DataBankRoute, registrationStr } from '@/strings';
import { CustomButton } from '@/components/atoms/CustomButton';

export function FilterForm({ control, reset }: any) {
  return (
    <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
      <Grid item xs={12} md={3}>
        <CustomInput
          control={control}
          name="name"
          fullWidth
          label={DataBankRoute.firstName}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <CustomInput
          control={control}
          name="lastName"
          fullWidth
          label={DataBankRoute.lastName}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <CustomInput
          control={control}
          name="nationalId"
          fullWidth
          label={DataBankRoute.nationalId}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <CustomInput
          control={control}
          name="username"
          fullWidth
          label={registrationStr.username}
        />
      </Grid>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginTop: '2rem',
        }}
      >
        <CustomButton variant="contained" type="submit">
          {DataBankRoute.filter}
        </CustomButton>
        <CustomButton variant="outlined" onClick={() => reset()}>
          {DataBankRoute.earase}
        </CustomButton>
      </Box>
    </StyledFilterChild>
  );
}
