'use client';

import { StyledContainer, StyledFilterChild } from './styled';
import { StyledInputContainer } from '@/components/pages/dashboard/image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { DataBankRoute } from '@/strings';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';

export const FilterChildSecond = ({ control }: any) => {
  return (
    <StyledContainer>
      <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <CustomInput
            name="group"
            label={DataBankRoute.group}
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
          <CustomInput
            name="accurancyNumber"
            label={DataBankRoute.accurancyNumber}
            control={control}
            fullWidth
            type="number"
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <CustomRHFAutocomplete
            options={[]}
            name="nationality"
            label={DataBankRoute.nationality}
            control={control}
          />
        </StyledInputContainer>
      </StyledFilterChild>
    </StyledContainer>
  );
};
