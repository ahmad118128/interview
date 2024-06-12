'use client';
import { useState } from 'react';
import { StyledContainer, StyledFilterChild } from './styled';
import { allValidateType } from '@/components/BaseComponents/baseInput';
import { StyledInputContainer } from '@/components/pages/dashboard/image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { DataBankRoute } from '@/strings';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import ControlledTimeDatePickerInput from '@/components/organisms/TimeDatePicker/ControlledTimeDatePicker';

export const FilterChildFirst = ({ control }: any) => {
  const inputs = [
    {
      typeInput: 'textField',
      name: 'title1',
      value: '',
      label: 'Book Title1',
      fullWidth: true,
      defaultValue: '',
      control: control,
    },
    {
      typeInput: 'select',
      name: 'genre',
      value: '',
      options: [
        { value: 'fiction', label: 'Fiction' },
        { value: 'non-fiction', label: 'Non-Fiction' },
        { value: 'mystery', label: 'Mystery' },
      ],
      getOptionLabel: (option: { value: any }) => option.value,
      getOptionValue: (option: { value: any }) => option.value,
      multiple: true,
      label: 'تست',
      style: {
        width: '100%',
        height: '100%',
      },
      control: control,
    },
    {
      typeInput: 'textField',
      label: 'Book Title2',
      fullWidth: true,
      defaultValue: '',
      control: control,
      name: 'testing',
      rules: {
        pattern: allValidateType.num,
      },
    },
    {
      typeInput: 'textField',
      name: 'title3',
      value: '',
      label: 'Book Title3',
      fullWidth: true,
      defaultValue: '',
      control: control,
    },

    {
      typeInput: 'datepicker',
      name: 'title4',
      value: '',
      label: 'Book Title',
      control: control,
    },
  ];

  return (
    <StyledContainer>
      <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <CustomRHFAutocomplete
            label={DataBankRoute.supervisortList}
            control={control}
            name="supervisortList"
            options={[]}
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <CustomRHFAutocomplete
            label={DataBankRoute.supervisortList}
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
            label={DataBankRoute.supervisortList}
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
            value={0}
            onChange={() => console.log('first')}
            rules={{ required: 'Require' }}
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={4} lg={3}>
          <ControlledTimeDatePickerInput
            name="name"
            control={control}
            label={DataBankRoute.accurancyStart}
            value={0}
            onChange={() => console.log('first')}
            rules={{ required: 'Require' }}
          />
        </StyledInputContainer>
      </StyledFilterChild>
    </StyledContainer>
  );
};
