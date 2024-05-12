'use client';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  StyledContainer,
  StyledFilterChild,
  StyledInputContainer,
} from './styled';
import { CustomButton } from '@/components/atoms/CustomButton';
import { generalStr } from '@/strings';
import { CustomInput } from '@/components/atoms/input/controlledCustomInput';
import CustomSelect from '@/components/atoms/input/CustomSelect';

export const FilterChild = () => {
  const { control, setValue, watch } = useFormContext();

  return (
    <StyledContainer>
      <StyledFilterChild container spacing={{ xs: 0, md: 5 }}>
        <StyledInputContainer item xs={12} md={6} lg={3}>
          <CustomInput
            control={control}
            label="نام کاربری"
            name="username"
            variant="standard"
            fullWidth
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={6} lg={3}>
          <CustomInput
            control={control}
            label="نام و نام خانوادگی"
            name="full_name"
            variant="standard"
            fullWidth
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={6} lg={3}>
          <CustomInput
            control={control}
            label="گروه"
            name="groups"
            variant="standard"
            fullWidth
          />
        </StyledInputContainer>
        <StyledInputContainer item xs={12} md={6} lg={3}>
          <CustomSelect
            label="وضعیت"
            name={'is_active'}
            fullWidth
            value={watch('is_active') || ''}
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setValue(event.target.name, event.target.value)}
            items={[
              {
                name: 'همه',
                value: '',
              },
              {
                name: 'غیرفعال',
                value: 'false',
              },
              {
                name: 'فعال',
                value: 'true',
              },
            ]}
          />
        </StyledInputContainer>
      </StyledFilterChild>

      <CustomButton
        style={{ margin: '1rem 0 0.25rem 0' }}
        variant="outlined"
        size="small"
        type="submit"
      >
        {generalStr.applyFilter}
      </CustomButton>
    </StyledContainer>
  );
};
