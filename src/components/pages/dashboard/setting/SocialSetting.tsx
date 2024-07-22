'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Box, Grid, Typography } from '@mui/material';
import { SettingRoute } from '@/strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { CustomButton } from '@/components/atoms/CustomButton';

import {
  StyledAddFormHeader,
  StyledAddFormMain,
  StyledAddFormWrapper,
} from '@/components/template/FilterContainer/styled';
import { StyledFilterChild } from '../image-recognition/FilterChild/styled';

export function SocialSetting() {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const submitHandler = (data: any) => console.log(data);

  const goBackUrl = () => {
    router.back();
  };

  return (
    <StyledAddFormWrapper>
      <StyledAddFormHeader>
        <Typography variant="h2">{SettingRoute.publicSetting}</Typography>

        <IconButton iconName="tabler:arrow-narrow-left" onClick={goBackUrl} />
      </StyledAddFormHeader>

      <StyledAddFormMain>
        <form onSubmit={handleSubmit(submitHandler)}>
          <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
            <Grid item xs={12}>
              <CustomInput
                control={control}
                name="recordDatabasePath"
                fullWidth
                label={SettingRoute.recordDatabasePath}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '1.25rem' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: '100%',
                }}
              >
                <CustomButton type="submit" variant="contained">
                  {SettingRoute.record}
                </CustomButton>
                <CustomButton type="reset" variant="outlined">
                  {SettingRoute.refuse}
                </CustomButton>
                <CustomButton variant="outlined">
                  {SettingRoute.defaultMode}
                </CustomButton>
              </Box>
            </Grid>
          </StyledFilterChild>
        </form>
      </StyledAddFormMain>
    </StyledAddFormWrapper>
  );
}
