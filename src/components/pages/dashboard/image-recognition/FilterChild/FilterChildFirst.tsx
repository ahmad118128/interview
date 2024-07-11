'use client';

import { StyledContainer, StyledFilterChild } from './styled';
import { StyledInputContainer } from '@/components/pages/dashboard/image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { DataBankRoute } from '@/strings';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import ControlledTimeDatePickerInput from '@/components/organisms/TimeDatePicker/ControlledTimeDatePicker';

export const FilterChildFirst = ({ control }: any) => {
  return (
    <StyledContainer>
      <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <CustomRHFAutocomplete
            label={DataBankRoute.supervisoryList}
            control={control}
            name="supervisortList"
            options={[]}
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <CustomRHFAutocomplete
            label={DataBankRoute.supervisoryList}
            control={control}
            name="supervisortList"
            options={[]}
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <CustomInput
            name="group"
            label={DataBankRoute.group}
            control={control}
            fullWidth
          />
        </StyledInputContainer>

        <StyledInputContainer item xs={12} md={4} lg={3}>
          <CustomInput
            name="accurancyStart"
            label={DataBankRoute.accurancyStart}
            control={control}
            fullWidth
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <CustomRHFAutocomplete
            label={DataBankRoute.supervisoryList}
            control={control}
            name="supervisortList"
            options={[]}
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <CustomInput
            name="accurancyStart"
            label={DataBankRoute.accurancyStart}
            control={control}
            fullWidth
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <ControlledTimeDatePickerInput
            name="name"
            control={control}
            label={DataBankRoute.accurancyStart}
            rules={{ required: 'Require' }}
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <ControlledTimeDatePickerInput
            name="name"
            control={control}
            label={DataBankRoute.accurancyStart}
            rules={{ required: 'Require' }}
          />
        </StyledInputContainer>
      </StyledFilterChild>
    </StyledContainer>
  );
};
