import { Box, Grid } from '@mui/material';

import { StyledFilterChild } from '@/components/pages/dashboard/image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { DataBankRoute, TrafficAnalysisRoute } from '@/strings';
import { CustomButton } from '@/components/atoms/CustomButton';
import ControlledTimeDatePickerInput from '@/components/organisms/TimeDatePicker/ControlledTimeDatePicker';

export default function FilterForm({ control, reset }: any) {
  return (
    <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
      <Grid item xs={12} md={4}>
        <CustomInput
          control={control}
          name="name"
          fullWidth
          label={TrafficAnalysisRoute.gateName}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <ControlledTimeDatePickerInput
          name="startPassingDateAndTime"
          control={control}
          label={TrafficAnalysisRoute.startPassingDateAndTime}
          rules={{ required: 'Require' }}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <ControlledTimeDatePickerInput
          name="endPassingDateAndTime"
          control={control}
          label={TrafficAnalysisRoute.endPassingDateAndTime}
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
