import { Box, Grid } from '@mui/material';
import { StyledFilterChild } from '@/components/pages/dashboard/image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { DataBankRoute, SettingRoute } from '@/strings';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import { CustomButton } from '@/components/atoms/CustomButton';

export default function FilterForm({ control, reset }: any) {
  return (
    <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={SettingRoute.factoryName}
          control={control}
          name="factoryName"
          options={[]}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={SettingRoute.stationName}
          control={control}
          name="stationName"
          options={[]}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomInput
          control={control}
          name="clientAddress"
          fullWidth
          label={SettingRoute.clientAddress}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={SettingRoute.stationName}
          control={control}
          name="stationName"
          options={[]}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={SettingRoute.stationName}
          control={control}
          name="stationName"
          options={[]}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={SettingRoute.stationName}
          control={control}
          name="stationName"
          options={[]}
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
