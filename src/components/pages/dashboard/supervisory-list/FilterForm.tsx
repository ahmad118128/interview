import { Box, Grid } from '@mui/material';
import { StyledFilterChild } from '@/components/pages/dashboard/image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { DataBankRoute, SupervisitoryListRoute } from '@/strings';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import { CustomButton } from '@/components/atoms/CustomButton';

export default function FilterForm({ control, reset }: any) {
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
          name="similarityPercentage"
          fullWidth
          label={SupervisitoryListRoute.similarityPercentage}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <CustomInput
          control={control}
          name="description"
          fullWidth
          label={DataBankRoute.description}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <CustomRHFAutocomplete
          label={SupervisitoryListRoute.status}
          control={control}
          name="status"
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
