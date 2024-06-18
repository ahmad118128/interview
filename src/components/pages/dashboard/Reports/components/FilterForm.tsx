import { Box, Grid } from '@mui/material';
import { StyledFilterChild } from '@/components/pages/dashboard/image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { DataBankRoute, TrafficAnalysisRoute } from '@/strings';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import { CustomButton } from '@/components/atoms/CustomButton';
import { filterInputs } from '../constants';
import ControlledTimeDatePickerInput from '@/components/organisms/TimeDatePicker/ControlledTimeDatePicker';

export default function FilterForm({ control, reset }: any) {
  return (
    <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={filterInputs.gateName}
          control={control}
          name="gateName"
          options={[]}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={filterInputs.orientation}
          control={control}
          name="orientation"
          options={[]}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomInput
          control={control}
          name="minimumSimilarityPercentage"
          fullWidth
          label={filterInputs.minimumSimilarityPercentage}
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={filterInputs.matchingType}
          control={control}
          name="matchingType"
          options={[]}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomInput
          control={control}
          name="fromAge"
          fullWidth
          label={filterInputs.fromAge}
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomInput
          control={control}
          name="untilAge"
          fullWidth
          label={filterInputs.untilAge}
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={filterInputs.gender}
          control={control}
          name="gender"
          options={[]}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ControlledTimeDatePickerInput
          name="registrationTimeOf"
          control={control}
          label={filterInputs.registrationTimeOf}
          value={0}
          onChange={() => console.log('first')}
          rules={{ required: 'Require' }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ControlledTimeDatePickerInput
          name="registrationTimeUpTo"
          control={control}
          label={filterInputs.registrationTimeUpTo}
          value={0}
          onChange={() => console.log('first')}
          rules={{ required: 'Require' }}
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
