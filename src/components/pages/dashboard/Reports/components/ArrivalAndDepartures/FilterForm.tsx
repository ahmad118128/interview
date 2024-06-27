import { Box, Grid } from '@mui/material';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { DataBankRoute, ReportRoute } from '@/strings';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import { CustomButton } from '@/components/atoms/CustomButton';
import ControlledTimeDatePickerInput from '@/components/organisms/TimeDatePicker/ControlledTimeDatePicker';
import { StyledFilterChild } from '../../../image-recognition/FilterChild/styled';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { HeaderFilterTableProps } from '../TransientPeopleTab/type';

const FilterForm: React.FC<
  Pick<HeaderFilterTableProps<FieldValues>, 'control' | 'reset'>
> = ({ control, reset }) => {
  return (
    <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
      <Grid item xs={12} md={3}>
        <CustomRHFAutocomplete
          label={ReportRoute.arrivalsAndDeparturesَArrivalGateName}
          control={control}
          name="arrivalsAndDeparturesَArrivalGateName"
          options={[]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <CustomInput
          control={control}
          name="minimumSimilarityPercentage"
          fullWidth
          label={ReportRoute.minimumSimilarityPercentage}
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <ControlledTimeDatePickerInput
          name="arrivalsAndDeparturesTimeOf"
          control={control}
          label={ReportRoute.arrivalsAndDeparturesTimeOf}
          value={0}
          onChange={() => console.log('first')}
          rules={{ required: 'Require' }}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <ControlledTimeDatePickerInput
          name="arrivalsAndDeparturesTimeTo"
          control={control}
          label={ReportRoute.arrivalsAndDeparturesTimeTo}
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
