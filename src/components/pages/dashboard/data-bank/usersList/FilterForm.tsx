import { Box, Grid } from '@mui/material';
import { StyledFilterChild } from '@/components/pages/dashboard/image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { DataBankRoute } from '@/strings';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import { CustomButton } from '@/components/atoms/CustomButton';

export default function FilterForm({ control, reset }: any) {
  return (
    <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
      <Grid item xs={12} md={4}>
        <CustomInput control={control} name="name" fullWidth label="name" />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomInput
          control={control}
          name="nationalId"
          fullWidth
          label={DataBankRoute.nationalId}
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomInput
          control={control}
          name="phoneNumber"
          fullWidth
          label={DataBankRoute.phoneNumber}
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={DataBankRoute.group}
          control={control}
          name="group"
          options={[]}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={DataBankRoute.nationality}
          control={control}
          name="nationality"
          options={[]}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={DataBankRoute.supervisoryList}
          control={control}
          name="supervisortList"
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
