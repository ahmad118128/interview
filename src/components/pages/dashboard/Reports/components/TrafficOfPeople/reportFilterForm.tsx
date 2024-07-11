import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { CustomButton } from '@/components/atoms/CustomButton';
import ControlledTimeDatePickerInput from '@/components/organisms/TimeDatePicker/ControlledTimeDatePicker';
import { Box, Grid } from '@mui/material';
import {
  DataBankRoute,
  SettingRoute,
  TrafficAnalysisRoute,
  faqString,
  generalStr,
  siderBarList,
} from '@/strings';
import { StyledFilterChild } from '../../../image-recognition/FilterChild/styled';

export default function ReportFilterForm({ control, reset }: any) {
  return (
    <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
      <Grid item xs={12} md={4}>
        <CustomInput
          control={control}
          name="getName"
          label={generalStr.name}
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={generalStr.lastName}
          control={control}
          name="getLastName"
          options={[]}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={faqString.group}
          control={control}
          name="getGroup"
          options={[]}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ControlledTimeDatePickerInput
          control={control}
          name="startPassingDateAndTime"
          label={TrafficAnalysisRoute.startPassingDateAndTime}
          rules={{}}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ControlledTimeDatePickerInput
          control={control}
          name="endPassingDateAndTime"
          label={TrafficAnalysisRoute.endPassingDateAndTime}
          rules={{}}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomRHFAutocomplete
          label={siderBarList.supervisitoryList}
          control={control}
          name="supervisitoryList"
          options={[]}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomInput
          control={control}
          name="minimumSimilarityPercent"
          label={SettingRoute.minimumSimilarityPercent}
          type="number"
          fullWidth
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
