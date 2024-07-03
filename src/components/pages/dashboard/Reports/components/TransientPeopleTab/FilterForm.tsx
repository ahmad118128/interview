import { Box, Grid } from '@mui/material';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { DataBankRoute, ReportRoute } from '@/strings';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import { CustomButton } from '@/components/atoms/CustomButton';
import ControlledTimeDatePickerInput from '@/components/organisms/TimeDatePicker/ControlledTimeDatePicker';
import { StyledFilterChild } from '../../../image-recognition/FilterChild/styled';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { HeaderFilterTableProps } from './type';

const FilterForm: React.FC<
  Pick<HeaderFilterTableProps<FieldValues>, 'control' | 'reset'>
> = ({ control, reset }) => {
  return (
    <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={ReportRoute.gateName}
          control={control}
          name="gateName"
          options={[]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          fullWidth
          label={ReportRoute.directionOfGate}
          control={control}
          name="directionOfGate"
          options={[]}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomInput
          control={control}
          name="minimumSimilarityPercentage"
          fullWidth
          label={ReportRoute.minimumSimilarityPercentage}
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          fullWidth
          label={ReportRoute.matchingType}
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
          label={ReportRoute.fromAge}
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomInput
          control={control}
          name="untilAge"
          fullWidth
          label={ReportRoute.untilAge}
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          fullWidth
          label={ReportRoute.gender}
          control={control}
          name="gender"
          options={[]}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ControlledTimeDatePickerInput
          name="registrationTimeOf"
          control={control}
          label={ReportRoute.registrationTimeOf}
          value={0}
          onChange={() => console.log('first')}
          rules={{ required: 'Require' }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ControlledTimeDatePickerInput
          name="registrationTimeUpTo"
          control={control}
          label={ReportRoute.registrationTimeUpTo}
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
};

export default FilterForm;
